import styled from "styled-components";

const Wrapper = styled.div`
    display : inline-flex;
    background-color : var(--card-2);
    color : white;
    height : 80px;
    width : 100vw;
    position : absolute;
    left : 0;
    bottom : -160px;
    align-items : center;
    padding-left : 40px;
    drop-shadow :  0 0 1px black;

    animation-fill-mode : forwards;
    animation-name : up-and-down;
    animation-duration :3s;
    animation-repeat : no-repeat;
    z-index : 2000;

    &.hide {
        display : none;
    }

    &.animate {
        display : inline-flex;
    }
`;

export default function Toast(props:any) {
    return (
        <Wrapper className={props.type}>{props.content}</Wrapper>
    );
}