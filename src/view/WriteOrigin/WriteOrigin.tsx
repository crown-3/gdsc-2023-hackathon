
import styled from "styled-components";
import Container from "../../component/Container";
import InputArea from "../../component/InputArea";
import MainText from "../../component/MainText";
import {TopbarBackButton} from "../../component/Topbar";

const CaptionWrapper = styled.div`
    color : var(--placeholder-font);
    display : flex;
    justify-content : center;
    margin-top : var(--min-padding);
`

export default function WriteOrigin(){
    return (
    <Container>
        <TopbarBackButton title="오늘의 글 쓰기"/>
        <MainText content={"오늘의 글을"}></MainText>
        <MainText content={"아직 남기지 않으셨네요!"}></MainText>
        <InputArea></InputArea>
        <CaptionWrapper>당신의 생각을 마음껏 표현해주세요!</CaptionWrapper>
    </Container>
    );
}