import styled from "styled-components";
import ThreadPunch from "./ThreadPunch";

interface IProps {
  content: string;
  color?: string;
}

const Wrap = styled.div<{ bgColor: string }>`
  border-radius: 20px;
  border: ${(props) =>
    // primary color 받으면 stroke color로 default, 만약 다른거면 그대로 적용
    props.bgColor === "var(--primary-color)"
      ? `3px solid var(--stroke-color)`
      : `3px solid ${props.bgColor}`};
`;

const Content = styled.div`
  font-family: NanumMyeongjoBold;
  font-size: var(--font-size-small);
  color: var(--primary-font);
  margin: 0 17px;
`;

export default function ThreadContent({
  content,
  color = "var(--primary-color)",
}: IProps) {
  return (
    <Wrap bgColor={color}>
      <div style={{ marginTop: "12px" }}></div> {/* Margination */}
      <ThreadPunch />
      <div style={{ marginTop: "6px" }}></div> {/* Margination */}
      <Content>{content}</Content>
      <div style={{ marginTop: "6px" }}></div> {/* Margination */}
      <ThreadPunch />
      <div style={{ marginTop: "12px" }}></div> {/* Margination */}
    </Wrap>
  );
}
