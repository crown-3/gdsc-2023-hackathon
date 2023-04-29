import styled from "styled-components";

const Wrapper = styled.span`
    position : absolute;
    bottom : 10px;
    left : 20px;
    z-index : 1;
`;

interface IProps {
    count: number;
    max: number;
};

export default function WordCount({count, max=300}:IProps) {
    return (
        <Wrapper>{count} / {max} 자</Wrapper>
    );
}