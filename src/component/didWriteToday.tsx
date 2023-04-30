import React, {useEffect} from 'react';
import MainText from "./MainText";
import axiosInstance from "../axiosSetting";
import axios from "axios";


const DidWriteToday = () => {
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
  },[])

  return (
    <>{
    !didWriteToday &&
    <>
      <MainText content={"오늘의 글을"}/>
      <MainText content={"아직 남기지 않으셨네요!"}/>
    </>
  }
  {
    didWriteToday &&
    <>
      {/* TODO: 확인 바람*/}
      <MainText content={"오늘의 글을"}/>
      <MainText content={"이미 작성하셨습니다!"}/>
    </>
  }</>
  );
}

export default DidWriteToday;
