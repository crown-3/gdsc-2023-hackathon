import styled from "styled-components";

const Wrapper = styled.div`
    display : none;
    position : inline-block;
    text-decoration : underline;
    color : var(--placeholder-font);
`;

export default function Toast(props:any) {
    return (
        <Wrapper>{props.content}</Wrapper>
    );
}