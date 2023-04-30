import Container from "../../component/Container";
import { TopbarLogo } from "../../component/Topbar";
import ThreadListSpecific from "../../component/Thread/ThreadListSpecific.tsx";
import Navigation from "../../component/Navigation.tsx";
import { useEffect, useState } from "react";
import axiosInstance from "../../axiosSetting";
import { IThread } from "../Main/Main.tsx";
import { getCookie } from "../../cookie.ts";
import axios from "axios";

export default function Feed() {
  const [data, setData] = useState<IThread>([[]]);

  useEffect(() => {
    async function getAllPosts() {
      try {
        const token = getCookie("accessToken");

        const { data, status } = await axiosInstance.get<{
          postReceiveDetail: IThread;
        }>(`/posts/public`, {
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

  return (
    <Container>
      <TopbarLogo />
      {data.map((thread, index) => {
        <span key={index}>
          <ThreadListSpecific thread={thread} />
          <div style={{ marginTop: "30px" }}></div>
        </span>;
      })}
      <Navigation page="feed" />
    </Container>
  );
}
