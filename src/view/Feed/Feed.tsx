import Container from "../../component/Container";
import { TopbarLogo } from "../../component/Topbar";
import ThreadListSpecific, { Post } from "../../component/Thread/ThreadListSpecific.tsx";
import Navigation from "../../component/Navigation.tsx";
import { useEffect, useState } from "react";
import axiosInstance from "../../axiosSetting.ts";
import axios from "axios";
import horizontal_stars from "../../assets/horizontal-stars.png";

const dummyTitle = ["우울증", "슬픔"];

export default function Feed() {
    const [feed_data,setFeedData] = useState<Array<Post[]>>([]);

    async function fetchPublicPosts() {
      try {
        const {data} = await axiosInstance.get(`/posts/public`);
        setFeedData(data.postReceiveDetail);
      } catch (e) {
        if (axios.isAxiosError(e)) {
          return e.message;
        } else {
          return "An unexpected error occurred.";
        }
      }
    }
  
    useEffect(() => {
      fetchPublicPosts()
    }, [])
  
  console.log(feed_data);
  return (
    <Container>
      <TopbarLogo />
        {feed_data.map((posts,index)=>{
          return(<>
            <ThreadListSpecific title={dummyTitle[index%2]} contents={posts}/>
            <div style={{ display:"flex",alignItems:"center",justifyContent:"center", margin:" var(--min-padding) 0"}}><img src={horizontal_stars}></img></div>
          </>);
      })}
      <Navigation page="feed" />
    </Container>
  );
}
