import styled from "styled-components";
import { ScissorsSvg } from "../../assets/Svgs";

const Wrap = styled.div`
  height: 43px;
  border-radius: 12px;
  border: 3px solid var(--tulip-stroke);
  background-color: var(--tulip);
  width: fit-content;

  display: flex;
  align-items: center;
  justify-content: left;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: white;

  margin-top: 3px;

  transform: rotate(36deg);
  cursor: pointer;
`;

const Hole = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50px;
  background-color: var(--primary-color);
  border: 3px solid var(--tulip-stroke);
  margin-left: 13px;
`;

export default function ThreadEndBtn() {
  return (
    <Wrap>
      <Hole></Hole>

      <div
        style={{
          fontFamily: "NanumMyeongjoExtraBold",
          fontSize: "var(--font-size-medium)",
          marginRight: "15px",
          marginLeft: "20px",
          color: "white",
        }}
      >
        끝맺기
      </div>
      <div
        style={{
          width: "20px",
          height: "20px",
          marginRight: "20px",
        }}
      >
        <ScissorsSvg />
      </div>
    </Wrap>
  );
}
