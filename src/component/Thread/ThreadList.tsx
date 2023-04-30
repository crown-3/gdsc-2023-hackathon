import styled from "styled-components";
import ThreadStart from "./ThreadStart";
import ThreadContent from "./ThreadContent";
import ThreadRingConnection from "./ThreadRingConnection";
import ThreadConnectBtn from "./ThreadConnectBtn";
import ThreadEndBtn from "./ThreadEndBtn";
import ThreadInput from "./ThreadInput";
import { ThreadInputAtom, ThreadSubmitAtom } from "../../store";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { INode } from "../../view/Main/Main";

const Wrap = styled.div`
  margin: 0 var(--min-padding);
`;

interface IProps {
  threadId: number;
  thread: INode[];
}

export default function ThreadList({ threadId, thread }: IProps) {
  const [threadInput, setThreadInput] = useAtom(ThreadInputAtom);
  const [threadSubmitList, setThreadSubmitList] = useAtom(ThreadSubmitAtom);

  function updateThreadInput(value: number): void {
    /* 없으면 추가 */
    if (threadInput.indexOf(threadId) === -1) {
      setThreadInput([...threadInput, value]);
    } else {
      /* 있으면 없앰 */
      setThreadInput(threadInput.filter((thread) => thread !== value));
    }
    console.log(threadInput);
  }

  if (threadSubmitList.indexOf(threadId) === -1) {
    return (
      <Wrap>
        <ThreadStart content={threadId.toString()} />
        {thread.map((node, index) => (
          <span key={index}>
            <ThreadRingConnection />
            <ThreadContent content={node.postContent} />
          </span>
        ))}
        <ThreadRingConnection />
        {threadInput.indexOf(threadId) !== -1 ? (
          <span>
            <ThreadInput threadId={threadId} />
          </span>
        ) : (
          <span>
            <span
              onClick={() => {
                updateThreadInput(threadId);
              }}
            >
              <ThreadConnectBtn />
            </span>
            <span>
              <ThreadEndBtn />
            </span>
          </span>
        )}
      </Wrap>
    );
  } else {
    return (
      <div
        style={{
          backgroundColor: "#7FC99D",
          fontFamily: "NanumMyeongjoExtraBold",
          fontSize: "24px",
          color: "#FFFFFF",
          height: "52px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        정상적으로 전송되었습니다!
      </div>
    );
  }
}
