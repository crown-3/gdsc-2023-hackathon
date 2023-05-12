import Container from "../../component/Container";
import styled from "styled-components";
import LogoHori from "../../assets/oragi_horizontal.png";
import Button from "../../component/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../cookie";
import { useState } from "react";
import Toast from "../../component/Toast";

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

export default function SignIn(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const location = useLocation().state??{};
    let needToast:boolean = false;
    needToast = (location.needToast!=null);

    let toastMessage:string = location.toastMessage??"";
    
    if(getCookie("accessToken")!=undefined) {
        navigate("/inbox",{state:{toastMessage : "logined"}});
    }

    const handleClick = ()=>{
<<<<<<< Updated upstream
        fetch(`https://gdsc-hackathon.p-e.kr/user/login`, {
=======
        if (username==="preview" && password ==="1234") {
            setCookie("accessToken","preview-dummy-token");
            setCookie("preview-mode","true");
            navigate("/inbox",{state: {needToast: true, toastMessage : "logined in preview mode!"}});
        }
        fetch(`http://gdsc-hackathon.p-e.kr:8080/user/login`, {
>>>>>>> Stashed changes
            method: 'POST',
            headers:{
              "Content-Type": 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          })
            .then(response => response.json())
            .then(res => {
                console.log(res);
              if (res.grantType) {
                  setCookie("accessToken",res.accessToken);
                  navigate("/inbox",{state: {needToast: true, toastMessage : "logined successfully!"}});
              }
              else {}
            });
        
    };

    return (
        <Container>
            {<Toast type={(toastMessage.length>0)?"animate":"hide"} content={toastMessage}></Toast>}
            <WrapperOfWrapper>
            <SignLogoWrapper>
            <img src={LogoHori}></img>
            <PhraseWrapper>연결정보</PhraseWrapper>
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
                       value={password}
                       type='password'
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
                <Button label="연결하기" onClick={handleClick}></Button>
            </Button2>
            </SignLogoWrapper>
            </WrapperOfWrapper>
        </Container>
    );
}