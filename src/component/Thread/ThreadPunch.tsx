import styled from "styled-components";

const Hole = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50px;
  background-color: var(--primary-color);
  border: 3px solid var(--stroke-color);
  margin-left: 13px;
`;

export default function ThreadPunch() {
  return <Hole></Hole>;
}
