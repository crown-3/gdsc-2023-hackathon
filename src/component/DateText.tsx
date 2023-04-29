import styled from "styled-components";

const Wrapper = styled.span`
    line-height : 2em;
    border-bottom : 1px var(--stroke-color) solid;
    font-family: 'NanumMyeongjoBold';
`;

export default function DateText(props:any) {
    return (
        <Wrapper>{props.content}</Wrapper>
    );
}