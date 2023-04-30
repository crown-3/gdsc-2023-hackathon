import Collapsible from "../../component/Collapsible/Collapsible";
import Container from "../../component/Container";
import { TopbarBackButton } from "../../component/Topbar";
import chainSample from "../../assets/chain-sample.png";
import styled from "styled-components";
import ThreadContent from "../../component/Thread/ThreadContent";

import Navigation from "../../component/Navigation";

import DateText from "../../component/DateText";

import axios from "axios";
import { getCookie } from "../../cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ThreadContentWrapper = styled.div`
  padding: 5px;
`;

const ThreadPadding = styled.div`
  padding: 30px;
`;

const SemiTitle = styled.div`
  font-size: 24px;
  font-family: "NanumMyeongjoExtraBold";
`;

const Caption = styled.div`
  font-size: var(--font-size-small);
  color: var(--primary-font);
`;

const ThreadWrap = styled.div`
  margin: 0 var(--min-padding);
  animation-name : float-up;
  animation-duration : 1s;
`;

const DateTextWrapper = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    margin : var(--min-padding) 0;
`;



export default function MyLog(){
    const navigate = useNavigate();
    const [contentText, setContentText] = useState<any[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const getMyLog = async () => {
          try {
            const response = await axios.get(`https://gdsc-hackathon.p-e.kr/posts`, {
              headers: {
                Authorization: `Bearer ${getCookie("accessToken")}`
              }
            });
            setContentText(response.data.posts);
            console.log(response.data.posts);
            
            setIsLoaded(true);
             } catch (error) {
            console.error(error);
          }
        };
    
        getMyLog();
      }, []);

    const navigateToSpecific = (id:number)=>{
        navigate(`/specific/${id}`);
    }
    
    return (

    <Container>
      <TopbarBackButton title="나와 연결된 오라기" />
      <Collapsible>
        <img src={chainSample} />
        <div style={{ marginTop: "10px" }}></div>
        <SemiTitle>카드를 클릭해서</SemiTitle>
        <SemiTitle>전체 오라기를 보세요</SemiTitle>
        <div style={{ marginTop: "5px" }}></div>
        <Caption>자신이 남긴 글들이</Caption>
        <Caption>어떤 오라기를 만들었는지 되새겨보아요</Caption>
      </Collapsible>
      <DateTextWrapper>
            <DateText content={"2023.04.30"}/>
        </DateTextWrapper>

        <ThreadWrap>
            
            {isLoaded && contentText.map((c) => (
                <ThreadContentWrapper>
                 <ThreadContent onClick={navigateToSpecific} postId={c.postId}content={c.content}/>
                 </ThreadContentWrapper>
                 
            ))}
        </ThreadWrap>
        <ThreadPadding></ThreadPadding>
        <Navigation page="profile"/>
    </Container>
  );
}
