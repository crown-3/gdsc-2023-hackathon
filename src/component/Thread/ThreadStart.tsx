import styled from "styled-components";
import ThreadPunch from "./ThreadPunch";
import { StarSvg } from "../../assets/Svgs";

const Wrap = styled.div`
  height: 43px;
  border-radius: 25px;
  border: 3px solid var(--stroke-color);
  width: fit-content;

  display: flex;
  align-items: center;
  justify-content: left;
`;

export default function ThreadStart() {
  return (
    <Wrap>
      <ThreadPunch />
      <div
        style={{
          width: "20px",
          height: "20px",
          margin: "0 10px",
        }}
      >
        <StarSvg />
      </div>
      <div
        style={{
          width: "10px",
          height: "10px",
          position: "relative",
          top: "-18px",
          left: "-15px",
        }}
      >
        <StarSvg />
      </div>
      <div
        style={{
          fontFamily: "NanumMyeongjoExtraBold",
          fontSize: "var(--font-size-medium)",
          color: "var(--primary-font)",
          marginRight: "20px",
          marginLeft: "-10px",
        }}
      >
        시간 부족
      </div>
    </Wrap>
  );
}
