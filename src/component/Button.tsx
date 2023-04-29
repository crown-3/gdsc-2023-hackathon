import styled from "styled-components";

const ButtonWrapper = styled.div`
    display : inline-block;
    height : 2em;
    border-radius : 1em;
    border : 1px var(--secondary-color) solid;
    padding : 0 1em;
`;

export default function Button(props:any) {
    return (
        <ButtonWrapper>{props.label}</ButtonWrapper>
    );
}