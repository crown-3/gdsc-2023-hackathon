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

export default function Main() {
  const navigate = useNavigate();

  const [didWriteToday, setDidWriteToday] = React.useState<boolean>(false);

  const fetchDidWrite = async () => {
    try {
      const {data} = await axiosInstance.get('/user/today');
      setDidWriteToday(data);
    } catch (e) {
      if (axios.isAxiosError(e)) {
      console.log("error message: ", e.message);
      return e.message;
    } else {
      console.log("unexpected error: ", e);
      return "An unexpected error occurred.";
      }
    }
  }

  useEffect(() => {
    fetchDidWrite();
  }, []);



  if (getCookie("accessToken") == undefined) {
    console.log("no cookie");
    navigate("/signin");
  }

  return (
    <Container>
      <TopbarLogo />
      {
        !didWriteToday &&
        <>
          <MainText content={"오늘의 글을"}></MainText>
          <MainText content={"아직 남기지 않으셨네요!"}></MainText>
        </>
      }
      {
        didWriteToday &&
        <>
          {/* TODO: 추가 바람*/}
          <div>오늘은 이미 글을 작성했습니다!</div>
        </>
      }
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
