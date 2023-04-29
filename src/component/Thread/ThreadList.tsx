import styled from "styled-components";
import ThreadStart from "./ThreadStart";
import ThreadContent from "./ThreadContent";
import ThreadRingConnection from "./ThreadRingConnection";
import ThreadConnectBtn from "./ThreadConnectBtn";
import ThreadEndBtn from "./ThreadEndBtn";

const Wrap = styled.div`
  margin: 0 var(--min-padding);
`;

export default function ThreadList() {
  return (
    <Wrap>
      <ThreadStart />
      <ThreadRingConnection />
      <ThreadContent content="할 건 많고, 시간은 부족하네요..ㅠㅠ 시간이 참 속절없습니다" />
      <ThreadRingConnection />
      <ThreadContent content="할 건 많고, 시간은 부족하네요..ㅠㅠ 시간이 참 속절없습니다" />
      <ThreadRingConnection />
      <ThreadContent content="할 건 많고, 시간은 부족하네요..ㅠㅠ 시간이 참 속절없습니다" />
      <ThreadRingConnection />
      <ThreadContent content="할 건 많고, 시간은 부족하네요..ㅠㅠ 시간이 참 속절없습니다" />
      <ThreadRingConnection />
      <ThreadConnectBtn />
      <ThreadEndBtn />
    </Wrap>
  );
}
