import Container from "../../component/Container";
import MainText from "../../component/MainText";
import { TopbarLogo } from "../../component/Topbar";
import MainInput from "../../component/Main/MainInput";
import ThreadList from "../../component/Thread/ThreadList";
import Navigation from "../../component/Navigation";
import ThreeStars from "../../component/ThreeStars";
import { getCookie } from "../../cookie";
import { useNavigate } from "react-router-dom";
import React, {useEffect} from "react";
import axiosInstance from "../../axiosSetting";
import axios from "axios";
import DidWriteToday from "../../component/didWriteToday";

export default function Main() {
  const navigate = useNavigate();

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
      <ThreadList threadId={1} />
      <div style={{ marginTop: "80px" }}></div> {/* Margination */}
      <ThreeStars />
      <div style={{ marginTop: "40px" }}></div> {/* Margination */}
      <Navigation page="home" />
    </Container>
  );
}
