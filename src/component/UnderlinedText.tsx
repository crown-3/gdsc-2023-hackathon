import styled from "styled-components";

const Wrapper = styled.div`
    position : inline-block;
    text-decoration : underline;
`;

export default function UnderlinedText(props:any) {
    return (
        <Wrapper>{props.label}</Wrapper>
    );
}