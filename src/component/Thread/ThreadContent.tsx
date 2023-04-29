import styled from "styled-components";
import ThreadPunch from "./ThreadPunch";

interface IProps {
  content: string;
}

const Wrap = styled.div<{ bgColor: string }>`
  border-radius: 20px;
  border: ${(props) =>
    // primary color 받으면 stroke color로 default, 만약 다른거면 그대로 적용
    props.bgColor === "var(--primary-color)"
      ? `3px solid var(--stroke-color)`
      : `3px solid ${props.bgColor}`};
  background-color: ${(props) => props.bgColor};
  color: ${(props) =>
    props.bgColor === "var(--primary-color)" ? "var(--primary-font)" : "#FFF"};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Content = styled.div`
  font-family: NanumMyeongjoBold;
  font-size: var(--font-size-small);
  margin: 0 17px;
`;

function getRandomVariable(): string {
  const variables = ["var(--card-1)", "var(--card-2)", "var(--primary-color)"];
  const randomIndex = Math.floor(Math.random() * variables.length);
  return variables[randomIndex];
}

export default function ThreadContent({ content }: IProps) {
  return (
    <Wrap bgColor={getRandomVariable()}>
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
