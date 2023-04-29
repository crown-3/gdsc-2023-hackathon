import styled from "styled-components";
import AvatarButton from "./AvatarButton";
import WordCount from "./WordCount";

const InputAreaWrapper = styled.div`
    position : relative;
    display : inline-block;
    min-width : calc(100vw - 2 * var(--min-padding));
    border : 1px var(--primary-font) solid;
    margin : var(--min-padding) 0 0 var(--min-padding);
    border-radius : 20px;
    

    &:after {
        content: "";
        position : absolute;
        bottom : -20px;
        right : 1em;
        width : 30px;
        height : 30px;
        background-image: url('../src/assets/stars.png');
        background-repeat: no-repeat;
        z-index : 1 ;
    }
`;

const TextareaWrapper = styled.textarea`
    display : inline-block;
    border : none;
    background-color : transparent;
    height : 100%;
    min-width : 100%;
    min-height : 265px;
    resize: none;
    outline : none;
    padding : 1.5em;
    `;

const SendButtonWrapper = styled.span`
    position :absolute;
    right : 10px;
    bottom :10px;
`;

export default function InputArea() {
    return (
        <InputAreaWrapper>
            <TextareaWrapper  placeholder="오늘은 어떤 일이 있으셨나요?"/>
            <WordCount count={0} max={300}/>
            <SendButtonWrapper>
                <AvatarButton type="send"></AvatarButton>
            </SendButtonWrapper>
        </InputAreaWrapper>
    );
}