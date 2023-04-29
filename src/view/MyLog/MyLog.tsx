import Collapsible from "../../component/Collapsible/Collapsible";
import Container from "../../component/Container";
import {TopbarBackButton} from "../../component/Topbar";
import chainSample from "../../assets/chain-sample.png";
import styled from "styled-components";
import ThreadContent from "../../component/Thread/ThreadContent";
import DateText from "../../component/DateText";
import axios from "axios";
import { getCookie, setCookie } from "../../cookie";
import { useState } from "react";

const SemiTitle = styled.div`
    font-size : var(--font-size-medium); 
`
const Caption = styled.div`
    font-size : var(--font-size-small); 
    color : var(--placeholder-font);
`;

const ThreadWrap = styled.div`
  margin: 0 var(--min-padding);
`;

const DateTextWrapper = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    margin : var(--min-padding) 0;
`;
var content_text="";


export default function MyLog(){

    const [isLoaded, setIsLoaded] = useState(false);
    const getMyLog = async () => {
        try {
          const response = await axios.get(`http://gdsc-hackathon.p-e.kr:8080/posts`,{ 
            headers : {
              Authorization: `Bearer ${getCookie("accessToken")}`
            }
          });
          content_text = response.data.posts[0].content;
          console.log(response.data.posts[0].content);
          setIsLoaded(true);
        } catch (error) {
          console.error(error);
        }
      }; 
      
      getMyLog();
      console.log(content_text);
    return (
    <Container>
        <TopbarBackButton title="나와 연결된 오라기"/>
        <Collapsible>
            <img src={chainSample}/>
            <SemiTitle>카드를 클릭해서</SemiTitle>
            <SemiTitle>전체 오라기를 보세요</SemiTitle>
            <Caption>자신이 남긴 글들이</Caption>
            <Caption>어떤 오라기를 만들었는지 되새겨보아요</Caption>
        </Collapsible>
        <DateTextWrapper>
            <DateText content={"2023.04.30"}/>
        </DateTextWrapper>
        <ThreadWrap>

            {isLoaded &&<>
            <ThreadContent content={content_text}></ThreadContent>
            </>}
        </ThreadWrap>
    </Container>
    );
}