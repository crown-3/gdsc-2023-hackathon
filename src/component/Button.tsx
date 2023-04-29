import styled from "styled-components";

const ButtonWrapper = styled.div`
    display : inline-flex;
    align-items : center;
    justify-content : center;
    min-height : 35px;
    min-width : 135px;
    border-radius : 1em;
    border : 1px var(--primary-font) solid;
    text-justify : center;
`;

export default function Button(props:any) {
    return (
        <ButtonWrapper>{props.label}</ButtonWrapper>
    );
}