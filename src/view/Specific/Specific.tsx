
import Container from "../../component/Container";

import {TopbarBackButton} from "../../component/Topbar";
import ThreadListSpecific, {Post} from "../../component/Thread/ThreadListSpecific.tsx";
import axiosInstance from "../../axiosSetting";
import React, {useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import { getCookie } from "../../cookie.ts";
import * as Dummy from  "../../dummy-data";

export default function Specific(){

  const [linkedPost, setLinkedPost] = React.useState<Post[]>([]);
  const { postId } = useParams();

  function fetchDummyLinkedPosts(){
    setLinkedPost(Dummy.dummySpecificPost);
  }

  async function fetchLinkedPosts() {
    try {
      const {data} = await axiosInstance.get(`/posts/${postId}`);
      setLinkedPost(data.postLinked);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return e.message;
      } else {
        return "An unexpected error occurred.";
      }
    }
  }

  useEffect(() => {
    if(getCookie("preview-mode")!=="true") fetchLinkedPosts();
    else fetchDummyLinkedPosts();
  }, [])

    return (
        <Container>
            <TopbarBackButton title="2023.04.29. 첫 번째 스레드"/>
            <ThreadListSpecific contents={linkedPost}/>
        </Container>
    );
}