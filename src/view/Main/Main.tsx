import Container from "../../component/Container";
import MainText from "../../component/MainText";
import { TopbarLogo } from "../../component/Topbar";
import MainInput from "../../component/Main/MainInput";
import ThreadList from "../../component/Thread/ThreadList";
import Navigation from "../../component/Navigation";
import ThreeStars from "../../component/ThreeStars";
import { getCookie } from "../../cookie";
import { useNavigate } from "react-router-dom";


import { useEffect, useState } from "react";


export interface INode {
  postId: number;
  postContent: string;
}

export type IThread = INode[][];

import React, {useEffect} from "react";
import axiosInstance from "../../axiosSetting";
import axios from "axios";
import DidWriteToday from "../../component/didWriteToday";


export default function Main() {
  const navigate = useNavigate();
  const [data, setData] = useState<IThread>([[]]);

  useEffect(() => {
    async function getAllPosts() {
      try {
        const token = getCookie("accessToken");

        const { data, status } = await axiosInstance.get<{
          postReceiveDetail: IThread;
        }>(`/posts/all`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("data: ", data);
        setData(data.postReceiveDetail);
      } catch (e) {
        if (axios.isAxiosError(e)) {
          console.log("error message: ", e.message);
          setData([[]]);
        } else {
          console.log("unexpected error: ", e);
          setData([[]]);
        }
      }
    }

    getAllPosts();
  }, []);

  if (getCookie("accessToken") == undefined) {
    console.log("no cookie");
    navigate("/signin");
  }

  return (
    <Container>
      <TopbarLogo />
      <DidWriteToday />
      <span
        onClick={() => {
          navigate("/write-origin");
        }}
      >
        <MainInput />
      </span>
      <div style={{ marginTop: "40px" }}></div> {/* Margination */}
      <MainText content={"당신을 위해 존재해 온 글들"}></MainText>
      <div style={{ marginTop: "15px" }}></div> {/* Margination */}
      {data.map((thread, index) => (
        <span key={index}>
          <ThreadList threadId={index} thread={thread} />
          <div style={{ marginTop: "80px" }}></div> {/* Margination */}
          <ThreeStars />
        </span>
      ))}
      <div style={{ height: "80vh" }}></div> {/* Margination */}
      <Navigation page="home" />
    </Container>
  );
}
