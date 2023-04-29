import styled from "styled-components";

const Wrapper = styled.div`
    display : flex;
    min-height : 100px;
    opacity : .8;
    filter : blur(2rem);
    align-items : space-between;
    padding : var(--min-padding);
`;

export function TopbarLogo(props:any) {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
}

export function TopbarBackButton(props:any) {
    return (
        <Wrapper>{props.children}</Wrapper>
    );
}