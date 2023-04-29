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
    overflow : show;
    background-color : transparent;
    font-family: 'NanumMyeongjoBold';
    
    ::after {
        content: "";
        position : absolute;
        bottom : 25px;
        right : 1em;
        width : 25px;
        height : 25px;
      background-size: auto 100%;
        background-image: url('../src/assets/underBarStars.png');
        background-repeat: no-repeat;
        z-index : 1 ;
    }
`;

export default function Button(props:any) {
    return (
        <ButtonWrapper>{props.label}</ButtonWrapper>
    );
}