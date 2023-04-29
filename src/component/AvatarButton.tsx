import styled from "styled-components";
import BackImg from "../assets/back.png";
import SendImg from "../assets/send.png";
import CloseImg from "../assets/close.png";

const AvatarWrapper = styled.div`
    position : inline-block;
    height : 25px;
    width : 25px;

    img {
        position : inline-block;
        height : 100%;
        width : 100%;
    }
`;

export default function AvatarButton(props:any="back") {

    let srcRef:any = BackImg;

    switch(props.type) {
        case "back": {
            srcRef = BackImg; break;
        }
        case "send": {
            srcRef = SendImg; break;
        }
        case "close": {
            srcRef = CloseImg; break;
        }
        default : {
            srcRef = "blank"; break;
        }
    }

    return (
        <AvatarWrapper>
            {srcRef!=="blank"?<img src={srcRef}/>:<></>}
        </AvatarWrapper>
    );
}