import styled from "styled-components";
import LogoVertical from "../../assets/oragi_vertical.png";
import Button from "../../component/Button";
import UnderlinedText from "../../component/UnderlinedText";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../cookie";
import PreviewNotifier from "../../component/PreviewNotifier";

const PendingWrapper = styled.div`
    position : absolute;
    display : inline-flex;
    top : 0;
    bottom : 0;
    right: 0;
    left : 0;
    background-color : var(--primary-color);
`;

const LogoWrapper = styled.div`
    position : absolute;
    display : inline-block;
    top : 50%;
    left : 50%;
    transform : translateY(-50%) translateX(-50%);
    width : 85px;
    height : 280px;
    animation-name : float-up-logo ;
    animation-duration : 1s;
    
    img {
        display : inline-block;
        width : 100%;
        height : 100%;
    }
`;

const PhraseWrapper = styled.div`
    position : absolute;
    display : inline-block;
    top : 30%;
    left : 30%;
    writing-mode: vertical-rl;
    text-orientation: upright;
    letter-spacing : .5rem;
`;

const Wrapper = styled.span`
    position : absolute;
    bottom : 20%;
    left : 50%;
    display : inline-flex;
    flex-direction : column;
    transform : translateX(-50%);
    margin : 0 auto;
    gap : 10px;

`


export default function Pending(){
    const navigate = useNavigate();
    
    const handleButton = ()=>{
        if(getCookie("accessToken")==undefined) {
            console.log("no cookie");
            navigate("/signin");
          } else {
            if(getCookie("preview-mode")!=="true") navigate("/inbox",{state: {needToast: true, toastMessage : "logined successfully!"}});
            else navigate("/inbox",{state: {needToast: true, toastMessage : "logined in preview mode!"}});
          }
    };

    const navigateToSignUp = ()=>{
        navigate("/signup");
    }

    return (
        <PendingWrapper>
            <PreviewNotifier/>
            <LogoWrapper>
                <img src={LogoVertical}></img>
            </LogoWrapper>
            <PhraseWrapper>감정 조각을 찾아서...</PhraseWrapper>
            <Wrapper>
                <Button label="연결하기" onClick={handleButton}></Button>
                <UnderlinedText label="아직 계정이 없으신가요?" onClick={navigateToSignUp}></UnderlinedText>
            </Wrapper>
        </PendingWrapper>
    );
}