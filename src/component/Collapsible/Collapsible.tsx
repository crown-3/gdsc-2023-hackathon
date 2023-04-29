import styled from "styled-components";
import AvatarButton from "../AvatarButton";
import "./style.module.css";

const Wrapper = styled.div`
    position : relative;
    display : inline-block;
    min-width : calc(100vw - 2 * var(--min-padding));
    margin-left : var(--min-padding);
    padding : var(--min-padding);

    > img {
        display : inline-block;
        width : 50%;
    }
`;

const CloseButtonWrapper = styled.span`
    position : absolute;
    top : 10px;
    right : var(--min-padding);
`;

export default function Collapsible(props:any) {
    const handleCollapse = (event: React.MouseEvent<HTMLElement>)=>{
        console.log()
        const targetNode = event.currentTarget;
        targetNode.classList.toggle("hide");
    }

    return (
        <Wrapper>
            <CloseButtonWrapper>
                <AvatarButton type="close" onClick={handleCollapse}></AvatarButton>
            </CloseButtonWrapper>
            {props.children}
        </Wrapper>
    );
}