import styled from "styled-components";

const Wrapper = styled.div`
    position : inline-block;
    text-decoration : underline;
    color : var(--placeholder-font);
`;

export default function UnderlinedText(props:any) {
    return (
        <Wrapper>{props.label}</Wrapper>
    );
}