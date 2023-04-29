import styled from "styled-components";
import { FeedSvg, HomeSvg, ProfileSvg } from "../assets/Svgs";

const Wrap = styled.div`
  border-top: 2px solid var(--primary-font);
  background-color: var(--primary-color);
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1000;

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
`;

interface IProps {
  page: "home" | "feed" | "profile";
}

export default function Navigation({ page }: IProps) {
  return (
    <Wrap>
      <div
        style={{
          width: "30px",
          height: "30px",
          cursor: "pointer",
        }}
      >
        <HomeSvg filled={page === "home"} />
      </div>
      <div
        style={{
          width: "30px",
          height: "30px",
          cursor: "pointer",
        }}
      >
        <FeedSvg filled={page === "feed"} />
      </div>
      <div
        style={{
          width: "30px",
          height: "30px",
          cursor: "pointer",
        }}
      >
        <ProfileSvg filled={page === "profile"} />
      </div>
    </Wrap>
  );
}
