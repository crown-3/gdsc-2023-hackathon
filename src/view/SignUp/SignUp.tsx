import Container from "../../component/Container";
import styled from "styled-components";
import LogoHori from "../../assets/oragi_horizontal.png";
import Button from "../../component/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../../cookie";

const WrapperOfWrapper = styled.div`
    position :relative;
    display : inline-flex;
    min-height : 100vh;
    min-width : 100vw;
    align-items : center;
    justify-content : center;
`;

const SignLogoWrapper = styled.div`
  position : absolute;
  display : inline-block;
  top : 50%;
  left : 50%;
  transform : translate(-50%, -50%);
  width : 130px;
  height : 380px;

  img {
    display : inline-block;
    width : 100%;
    height : 10%;
  }
`;

const PhraseWrapper = styled.div`
  position : absolute;
  display : inline-block;
  top : 30%;
  left : 50%;
  transform : translate(-50%, -50%);
  width: 100%;
  text-align: center;
  letter-spacing : .1rem;
  font-size: 15px;
  font-family: 'NanumMyeongjoExtraBold';
`;

const ID = styled.div`

  position : absolute;
  display : inline-block;
  top : 45%;
  left : 50%;
  transform : translate(-50%, -50%);
  width: 130px;
  text-align: center;
  letter-spacing : .1rem;
  font-family: 'NanumMyeongjoBold';
  border-bottom: 1px solid black;
  backgorund-color : none;

  &:after {
    content: "";
    background-size:auto 100%;
    position : absolute;
    bottom : -5px;

    left: -5px;

    width : 20px;
    height : 20px;
    background-image: url('../../../src/assets/underBarStars.png');
    background-repeat: no-repeat;
    z-index : 1 ;
  }
`;

const PW = styled.div`

  position : absolute;
  display : inline-block;
  top : 65%;
  left : 50%;
  transform : translate(-50%, -50%);
  width: 130px;
  text-align: center;
  letter-spacing : .1rem;

  font-family: 'NanumMyeongjoBold';
  border-bottom: 1px solid black;
  &:after {
    content: "";
    background-size:auto 100%;
    position : absolute;
    bottom : -5px;

    right: -5px;

    width : 20px;
    height : 20px;
    background-image: url('../../../src/assets/underBarStars.png');
    background-repeat: no-repeat;
    z-index : 1 ;
  }
`;

const Button2 = styled.div`

  position : absolute;
  display : inline-block;
  top : 85%;
  left : 50%;
  transform : translate(-50%, -50%);
  width: 100%;
  text-align: center;
  letter-spacing : .1rem;
  font-family: 'NanumMyeongjoBold';
  font-size: 12px;
  top-margin: 10px;
  bottom-margin: 10px;
`;

export default function SignUp(){
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if(getCookie("preview-mode")==="true") {
    navigate("/signin",{state: {needToast: true, toastMessage : "sign-up is unavailable in preview mode! You will be redirected to signin page."}});
    return ;
  }
  if(getCookie("accessToken")!=undefined) {removeCookie("accessToken");}

    const handleSignUp = () =>{
      fetch(`https://gdsc-hackathon.p-e.kr/user/signup`, {
            method: 'POST',
            headers:{
              "Content-Type": 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          })
            .then(response => {
              if (response.status == 200) {
                  navigate("/signin",{state: {needToast: true, toastMessage : "signed up successfully!"}});
              }
              else {}
            });
    }


    return (
        <Container>
            <WrapperOfWrapper>
            <SignLogoWrapper>
                <img src={LogoHori}></img>
                <PhraseWrapper>가입정보</PhraseWrapper>
                <ID>
                    <input id = "id"
                           placeholder="아이디"
                           value={username}
                           style={{
                               marginTop: "10px",
                               marginBottom:"10px",
                               top: "100%",
                               outline: "none",
                               paddingLeft:"10px",
                               fontSize: "10px",
                               fontFamily: 'NanumMyeongjoBold',
                               border: "none",
                               borderBottom:"1px",
                               width:'100px',

                               backgroundColor : "var(--primary-color)",
                           }}
                           onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{
                            setUsername(event.target.value);
                           }}

                    />
                </ID>
                <PW>
                    <input id = "pw"
                           placeholder="비밀번호"
                           type='password'
                           value={password}
                           style={{
                               marginTop: "10px",
                               marginBottom:"10px",
                               top: "100%",
                               outline: "none",
                               fontSize: "10px",
                               fontFamily: 'NanumMyeongjoBold',
                               border: "none",
                               borderBottom:"1px",
                               width:'100px',
                               paddingLeft:"10px",
                               backgroundColor : "var(--primary-color)",
                           }}
                           onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{
                            setPassword(event.target.value);
                           }}
                    />
                </PW>
                <Button2>
                    <Button label="가입하기" onClick={handleSignUp}></Button>
                </Button2>
            </SignLogoWrapper>
            </WrapperOfWrapper>
        </Container>
    );
}