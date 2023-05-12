import styled from "styled-components";
import PreviewNotifier from "./PreviewNotifier";

const Wrapper = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  max-width: 414px;
  min-height : 100vh;
  margin: 0 auto;
  background-color: var(--primary-color);
`;

export default function Container(props: any) {
  return <Wrapper>
    <PreviewNotifier/>
    {props.children}
    </Wrapper>;
}
