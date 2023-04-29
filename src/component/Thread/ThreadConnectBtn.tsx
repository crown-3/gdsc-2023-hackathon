import styled from "styled-components";

const Wrap = styled.div`
  height: 43px;
  border-radius: 12px;
  border: 3px solid var(--lemon-stroke);
  background-color: var(--lemon);
  width: fit-content;

  display: flex;
  align-items: center;
  justify-content: left;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  position: relative;
  z-index: 1;
  cursor: pointer;
`;

const Hole = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50px;
  background-color: var(--primary-color);
  border: 3px solid var(--lemon-stroke);
  margin-left: 13px;
`;

export default function ThreadConnectBtn() {
  return (
    <Wrap>
      <Hole></Hole>

      <div
        style={{
          fontFamily: "NanumMyeongjoExtraBold",
          fontSize: "var(--font-size-medium)",
          color: "var(--primary-font)",
          marginRight: "20px",
          marginLeft: "10px",
        }}
      >
        {">>"} 이어 쓰기
      </div>
    </Wrap>
  );
}
