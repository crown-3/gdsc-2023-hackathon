import styled, { keyframes } from "styled-components";
import Send from "../../assets/Svgs";
import Container from "../../component/Container";
import Button from "../../component/Button";
import { useNavigate } from "react-router-dom";

const SvgAnimation = keyframes`
    0% {
        opacity: 0;
        margin-top: -40px;
        transform:rotate(-80deg);
    }
    100% {
        opacity: 1;
        margin-top: 0px;
        transform:rotate(0deg);
    }
`;
const SendSvg = styled.div`
  animation: ${SvgAnimation} 1s ease;
`;

export default function WriteOriginLoad() {
  const navigator = useNavigate();
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginTop: "100px" }}></div>
        <SendSvg style={{ width: "120px", height: "120px" }}>
          <Send />
        </SendSvg>
        <div style={{ marginTop: "40px" }}></div>
        <div
          style={{
            fontFamily: "NanumMyeongjoBold",
            fontSize: "24px",
          }}
        >
          전송되었습니다.
        </div>
        <div style={{ marginTop: "20px" }}></div>
        <Button
          label="돌아가기"
          onClick={() => {
            navigator("/inbox");
          }}
        ></Button>
      </div>
    </Container>
  );
}
