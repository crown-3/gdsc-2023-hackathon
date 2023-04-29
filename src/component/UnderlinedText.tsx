import styled from "styled-components";

interface ButtonProps {
    label : string;
    onClick? : (event: React.MouseEvent<HTMLElement>)=>void;
}


const Wrapper = styled.div`
    position : inline-block;
    text-decoration : underline;
    color : var(--placeholder-font);
`;

export default function UnderlinedText({label, onClick=()=>{}}:ButtonProps) {
    return (
        <Wrapper onClick={onClick}>{label}</Wrapper>
    );
}