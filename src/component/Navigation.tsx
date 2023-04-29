import styled from "styled-components";
import { FeedSvg, HomeSvg, ProfileSvg } from "../assets/Svgs";
import { useNavigate } from "react-router-dom";

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
  const navigation = useNavigate();

  return (
    <Wrap>
      <div
        style={{
          width: "30px",
          height: "30px",
          cursor: "pointer",
        }}
        onClick={() => navigation("/")}
      >
        <HomeSvg filled={page === "home"} />
      </div>
      <div
        style={{
          width: "30px",
          height: "30px",
          cursor: "pointer",
        }}
        onClick={() => navigation("/feed")}
      >
        <FeedSvg filled={page === "feed"} />
      </div>
      <div
        style={{
          width: "30px",
          height: "30px",
          cursor: "pointer",
        }}
        onClick={() => navigation("/my-log")}
      >
        <ProfileSvg filled={page === "profile"} />
      </div>
    </Wrap>
  );
}
