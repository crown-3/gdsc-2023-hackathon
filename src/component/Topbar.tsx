import styled from "styled-components";
import Logo from "../assets/oragi_horizontal.png";
import AvatarButton from "./AvatarButton";
import { useNavigate } from "react-router-dom";

const TopbarWrapper = styled.div`
    display : flex;
    min-height : 65px;
    align-items : space-between;
    padding : var(--min-padding);
    justify-content : space-between;
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
  font-family: 'NanumMyeongjoBold';
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
  const navigate = useNavigate();

  const handleBack = ()=>{  
    navigate(-1);
  };

  return (
    <TopbarWrapper>
      <AvatarButton type="back" onClick={handleBack}></AvatarButton>
      <TitleWrapper>{props.title}</TitleWrapper>
      <AvatarButton type="blank"></AvatarButton>
    </TopbarWrapper>
  );
}
