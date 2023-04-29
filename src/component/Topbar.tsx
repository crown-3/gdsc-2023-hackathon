import styled from "styled-components";
import Logo from "../assets/oragi_horizontal.png";
import AvatarButton from "./AvatarButton";
import { useNavigate } from "react-router-dom";

const TopbarWrapper = styled.div`
  display: flex;
  min-height: 65px;
  align-items: space-between;
  padding: var(--min-padding);
  justify-content: space-between;

  background-color: #fffff080;
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const TopbarWrapperAlt = styled.div`
  display: flex;
  align-items: space-between;
  padding: 17px 15px;
  justify-content: space-between;

  background-color: #fffff080;
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const LogoWrapper = styled.span`
  display: inline-block;
  max-width: 100px;
  max-height: 30px;

  img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;

const TitleWrapper = styled.span`
  font-family: "NanumMyeongjoExtraBold";
  font-size: var(--font-size-medium);
`;

export function TopbarLogo() {
  return (
    <TopbarWrapper>
      <LogoWrapper>
        <img src={Logo} />
      </LogoWrapper>
    </TopbarWrapper>
  );
}

export function TopbarBackButton(props: any) {
  const navigation = useNavigate();
  return (
    <TopbarWrapperAlt>
      <span
        onClick={() => {
          navigation(-1);
        }}
      >
        <AvatarButton type="back"></AvatarButton>
      </span>
      <TitleWrapper>{props.title}</TitleWrapper>
      <AvatarButton type="blank"></AvatarButton>
    </TopbarWrapperAlt>
  );
}
