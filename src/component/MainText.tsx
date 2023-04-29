import styled from "styled-components";

interface IProps {
  content: string;
}

const StyledFont = styled.div`
  font-size: 28px;
  font-family: "NanumMyeongjoExtraBold";
  color: var(--primary-font);
  margin-left: var(--min-padding);
  line-break: word-break;
`;

export default function MainText({ content }: IProps) {
  return <StyledFont>{content}</StyledFont>;
}
