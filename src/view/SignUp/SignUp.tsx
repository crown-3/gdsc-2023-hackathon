import Container from "../../component/Container";
import styled from "styled-components";
import LogoHori from "../../assets/oragi_horizontal.png";

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
    
    right : -5px;
    
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
    bottom : -5px;

    right : -5px;

    width : 20px;
    height : 20px;
    background-image: url('../../../src/assets/underBarStars.png');
    background-repeat: no-repeat;
    z-index : 1 ;
  }
`;

const Button = styled.div`

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
    return (
        <Container>
            <SignLogoWrapper>
                <img src={LogoHori}></img>
                <PhraseWrapper>가입정보</PhraseWrapper>
                <ID>
                    <input id = "id"
                           placeholder="아이디"
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

                               backgroundColor : "var(--primary-color)",
                           }}
                    />
                </ID>
                <PW>
                    <input id = "pw"
                           placeholder="비밀번호"
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

                               backgroundColor : "var(--primary-color)",
                           }}
                    />
                </PW>
                <Button>가입하기</Button>
            </SignLogoWrapper>

        </Container>
    );
}