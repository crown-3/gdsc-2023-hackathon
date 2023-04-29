import styled from "styled-components";

const Wrapper = styled.div`
    position : absolute;
    top : 0;
    bottom : 0;
    right : 0;
    left : 0;
    background-color : var(--primary-color);
`;

export default function Container(props:any) {
    return (
        <Wrapper>{props.children}</Wrapper>
    );
}