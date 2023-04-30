import styled from "styled-components";
import ThreadPunch from "./ThreadPunch";

interface IProps {
  content: string;
  postId? : number;
  onClick? : (postId:number)=>void;
}

const Wrap = styled.div<{ bgColor: string }>`
  border-radius: 20px;
  border: ${(props) =>
    // primary color 받으면 stroke color로 default, 만약 다른거면 그대로 적용
    props.bgColor === "var(--primary-color)"
      ? `3px solid var(--stroke-color)`
      : `3px solid ${props.bgColor}`};
  background-color: ${(props) => props.bgColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Content = styled.div<{ bgColor: string }>`
  font-family: NanumMyeongjoBold;
  font-size: var(--font-size-small);
  color: ${(props) =>
    props.bgColor === "var(--primary-color)" ? "var(--primary-font)" : "white"};
  margin: 0 17px;
  line-height: 24px;
`;

function getRandomVariable(): string {
  const variables = ["var(--card-1)", "var(--card-2)", "var(--primary-color)"];
  const randomIndex = Math.floor(Math.random() * variables.length);
  return variables[randomIndex];
}

export default function ThreadContent({ content ,onClick = ()=>{},postId}: IProps) {
  const randomVariable = getRandomVariable();

  return (
    <Wrap bgColor={randomVariable} onClick={()=>{if(postId){onClick(postId);}}}>
      <div style={{ marginTop: "12px" }}></div> {/* Margination */}
      <ThreadPunch />
      <div style={{ marginTop: "8px" }}></div> {/* Margination */}
      <Content bgColor={randomVariable}>{content}</Content>
      <div style={{ marginTop: "8px" }}></div> {/* Margination */}
      <ThreadPunch />
      <div style={{ marginTop: "12px" }}></div> {/* Margination */}
    </Wrap>
  );
}
