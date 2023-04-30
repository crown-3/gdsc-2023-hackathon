import styled from "styled-components";
import ThreadStart from "./ThreadStart";
import ThreadContent from "./ThreadContent";
import ThreadRingConnection from "./ThreadRingConnection";
import ThreadConnectBtn from "./ThreadConnectBtn";
import ThreadEndBtn from "./ThreadEndBtn";
import ThreadInput from "./ThreadInput";
import { ThreadInputI, ThreadInputAtom } from "../../store";
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

  function getIsOpen(threadInput: ThreadInputI[], threadId: number): boolean {
    const thread = threadInput.find((thread) => thread.threadId === threadId);

    return thread ? thread.isOpen : false;
  }

  const updateIsOpen = (threadId: number) => {
    const updatedThreads = threadInput.map((thread) => {
      if (thread.threadId === threadId) {
        return { ...thread, isOpen: true };
      }
      return thread;
    });

    setThreadInput(updatedThreads);
  };

  useEffect(() => {
    setThreadInput([...threadInput, { threadId: threadId, isOpen: false }]);
  }, []);

  return (
    <Wrap>
      <ThreadStart />
      {thread.map((node, index) => (
        <span key={index}>
          <ThreadRingConnection />
          <ThreadContent content={node.postContent} />
        </span>
      ))}
      <ThreadRingConnection />
      {getIsOpen(threadInput, threadId) ? (
        <span>
          <ThreadInput threadId={threadId} />
        </span>
      ) : (
        <span>
          <span
            onClick={() => {
              updateIsOpen(threadId);
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
}
