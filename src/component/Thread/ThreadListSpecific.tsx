import styled from "styled-components";
import ThreadStart from "./ThreadStart";
import ThreadContent from "./ThreadContent";
import ThreadRingConnection from "./ThreadRingConnection";
import { INode } from "../../view/Main/Main";

const Wrap = styled.div`
  margin: 0 var(--min-padding);
`;

interface IProps {
  thread: INode[];
}

export default function ThreadListSpecific({ thread }: IProps) {
  console.log("sdf");
  return (
    <Wrap>
      <ThreadStart />
      {thread.map((node, index) => (
        <span key={index}>
          <ThreadRingConnection />
          <ThreadContent content={node.postContent} />
        </span>
      ))}
    </Wrap>
  );
}
