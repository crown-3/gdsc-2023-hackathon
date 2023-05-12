import styled from "styled-components";

const Wrapper = styled.span`
    display : inline-flex;
    position : sticky;
    left : 0;
    right : 0;
    width : 100%;
    top : 0;
    z-index : 10000;
    height : 150px;
    align-items : center;
    justify-content : center;
    text-align : center;
    background-color : var(--card-1);
    color : var(--tulip);
    font-weight : bold;
    line-height : 2em;
    opacity : .5;
`;

export default function PreviewNotifier() {
    return (
        <Wrapper>
            This is a preview of Oragi. <br/> 
            Backend support (including signup) is unavailable. <br/>
            Straight ahead to signin page, or /signin path.<br/>
            preview id/pw is : preview / 1234 . <br/>
        </Wrapper>
    );
}