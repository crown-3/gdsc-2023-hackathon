import styled from "styled-components";
import { StarSvg } from "../../assets/Svgs";

const MainInputWrap = styled.div`
  margin: 0 var(--min-padding);
  margin-top: 20px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainInputPlaceholder = styled.div`
  font-family: "NanumMyeongjo";
  font-size: var(--font-size-medium);
  color: var(--placeholder-font);
`;

export default function MainInput() {
  return (
    <MainInputWrap>
      <div
        style={{
          position: "absolute",
          width: "24px",
          height: "24px",
          right: "24px",
          marginTop: "-12px",
        }}
      >
        <StarSvg />
      </div>
      <div
        style={{
          position: "absolute",
          width: "10px",
          height: "10px",
          right: "20px",
          marginTop: "-24px",
        }}
      >
        <StarSvg />
      </div>
      <div>
        <div
          style={{
            borderTop: "1.5px solid var(--primary-font)",
            marginBottom: "14px",
            width: "calc(100% - 30px)",
          }}
        ></div>
        <MainInputPlaceholder>
          오늘은 어떤 일이 있으셨나요?
        </MainInputPlaceholder>
      </div>
      <div>
        <div
          style={{
            borderTop: "1.5px solid var(--primary-font)",
            marginTop: "14px",
          }}
        ></div>
        <div
          style={{
            borderTop: "1.5px solid var(--primary-font)",
            marginTop: "10px",
            width: "120px",
          }}
        ></div>
      </div>
    </MainInputWrap>
  );
}
