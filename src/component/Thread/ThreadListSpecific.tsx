import styled from "styled-components";
import ThreadStart from "./ThreadStart";
import ThreadContent from "./ThreadContent";
import ThreadRingConnection from "./ThreadRingConnection";

const Wrap = styled.div`
  margin: 0 var(--min-padding);
`;

interface ThreadListProps {
    content : string[];
}

export default function ThreadListSpecific({content}:ThreadListProps) {
    return (
        <Wrap>
            <ThreadStart />
            {content.map((element, index)=>{
	            return (
                    <>
                        <ThreadRingConnection />
                        <ThreadContent key={index} content={element} />
                    </>
                );})
            }
        </Wrap>
    );
}
