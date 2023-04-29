import styled from "styled-components";
import AvatarButton from "./AvatarButton";

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
    return (
        <Wrapper>
            <CloseButtonWrapper>
                <AvatarButton type="close"></AvatarButton>
            </CloseButtonWrapper>
            {props.children}
        </Wrapper>
    );
}