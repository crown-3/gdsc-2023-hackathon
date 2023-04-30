import styled from "styled-components";
import Container from "../../component/Container";
import MainText from "../../component/MainText";
import {TopbarBackButton} from "../../component/Topbar";
import { useRef, useState } from "react";
import AvatarButton from "../../component/AvatarButton";
import WordCount from "../../component/WordCount";
import { getCookie } from "../../cookie";

const CaptionWrapper = styled.div`
    color : var(--placeholder-font);
    display : flex;
    justify-content : center;
    margin-top : var(--min-padding);
`

const InputAreaWrapper = styled.div`
    position : relative;
    display : inline-block;
    min-width : calc(100vw - 2 * var(--min-padding));
    max-width: 414px;
    border : 1px var(--primary-font) solid;
    margin : var(--min-padding) 0 0 var(--min-padding);
    border-radius : 20px;
    

    &:after {
        content: "";
        position : absolute;
        bottom : -20px;
        right : 1em;
        width : 30px;
        height : 30px;
        background-image: url('../../assets/stars.png');
        background-repeat: no-repeat;
        z-index : 1 ;
    }
`;

const TextareaWrapper = styled.textarea`
    display : inline-block;
    border : none;
    background-color : transparent;
    height : 100%;
    min-width : 100%;
    min-height : 265px;
    resize: none;
    outline : none;
    padding : 1.5em;
    `;

const SendButtonWrapper = styled.span`
    position :absolute;
    right : 10px;
    bottom :10px;
`;

export default function WriteOrigin(){
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [count, setCount] = useState(0);
    const handleSubmit =()=>{
        fetch(`http://gdsc-hackathon.p-e.kr:8080/posts`, {
            method: 'POST',
            headers:{
              "Content-Type": 'application/json;charset=UTF-8',
              "Authorization" : `Bearer ${getCookie("accessToken")}`,
            },
            body: JSON.stringify({
              content: textareaRef.current!.value
            }),
          })
            .then(response => {
                if(response.status==200) {
                    console.log("successful");
                }
            });
    }

    const handleChange =(event:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setCount(event.target.value.length);
    }

    return (
    <Container>
        <TopbarBackButton title="오늘의 글 쓰기"/>
        <MainText content={"오늘의 글을"}></MainText>
        <MainText content={"아직 남기지 않으셨네요!"}></MainText>
        <InputAreaWrapper>
            <TextareaWrapper ref={textareaRef} onChange={handleChange}placeholder="오늘은 어떤 일이 있으셨나요?"/>
            <WordCount count={count} max={300}/>
            <SendButtonWrapper>
                <AvatarButton type="send" onClick={handleSubmit}></AvatarButton>
            </SendButtonWrapper>
        </InputAreaWrapper>
        <CaptionWrapper>당신의 생각을 마음껏 표현해주세요!</CaptionWrapper>
    </Container>
  );
}
