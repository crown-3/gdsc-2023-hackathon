import styled from "styled-components";

const PendingWrapper = styled.div`
    position : absolute;
    display : inline-flex;
    top : 0;
    bottom : 0;
    right: 0;
    left : 0;
    background-color : var(--primary-color);
`;



export default function Pending(){
    return (
        <PendingWrapper>
        </PendingWrapper>
    );
}