import styled from "styled-components";
import ThreadStart from "./ThreadStart";
import ThreadContent from "./ThreadContent";
import ThreadRingConnection from "./ThreadRingConnection";

const Wrap = styled.div`
  margin: 0 var(--min-padding);

`;

interface ThreadListProps {
    contents : Post[];
    title? : string;
}

export type Post = {
  postId: number;
  postContent: string;
}

export default function ThreadListSpecific({title="오라기", contents}:ThreadListProps) {
    return (
        <Wrap>
            <ThreadStart content={title}/>
            {contents.map(c=>
                        <ThreadCard content={c.postContent} postId={c.postId} />
                )
            }
        </Wrap>
    );
}

interface ThreadCardProps {
  content: string;
  postId: number;
}

const ThreadCardWrapper = styled.span`
    animation-name : float-up ;
    animation-duration : 1s;

    &:nth-of-type(1) {animation-duration: 1.0s; }
    &:nth-of-type(2) {animation-duration: 1.1s; }
    &:nth-of-type(3) {animation-duration: 1.2s; }
    &:nth-of-type(4) {animation-duration: 1.3s; }
    &:nth-of-type(5) {animation-duration: 1.4s; }
    &:nth-of-type(6) {animation-duration: 1.5s; }
`;

const ThreadCard = ({content, postId}: ThreadCardProps) => <ThreadCardWrapper>
  <ThreadRingConnection />
  <ThreadContent postId={postId} content={content}/></ThreadCardWrapper>
