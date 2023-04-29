import styled from "styled-components";
import Container from "../../component/Container";
import MainText from "../../component/MainText";
import { TopbarLogo } from "../../component/Topbar";

const MainInputWrap = styled.div`
  margin: 0 var(--min-padding);
  margin-top: 20px;
  height: 160px;
`;

const MainInputPlaceholder = styled.div`
  font-family: "NanumMyeongjo";
  font-size: var(--font-size-medium);
  color: var(--placeholder-font);
`;

export default function Main() {
  return (
    <Container>
      <TopbarLogo />
      <MainText content={"오늘의 글을"}></MainText>
      <MainText content={"아직 남기지 않으셨네요!"}></MainText>
      <MainInputWrap>
        <div
          style={{
            borderTop: "1px solid var(--primary-font)",
          }}
        ></div>
        <MainInputPlaceholder>
          오늘은 어떤 일이 있으셨나요?
        </MainInputPlaceholder>
        <div
          style={{
            borderTop: "1px solid var(--primary-font)",
          }}
        ></div>
      </MainInputWrap>
    </Container>
  );
}
