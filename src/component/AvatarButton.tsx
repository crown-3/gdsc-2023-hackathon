import styled from "styled-components";
import BackImg from "../assets/back.png";
import SendImg from "../assets/send.png";
import CloseImg from "../assets/close.png";

interface ButtonProp {
    type: string;
    onClick?: (event: React.MouseEvent<HTMLElement>)=>void;
}


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

export default function AvatarButton({type, onClick=()=>{}}:ButtonProp) {

    let srcRef:any = BackImg;

    switch(type) {
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
        <AvatarWrapper onClick={onClick}>
            {srcRef!=="blank"?<img src={srcRef}/>:<></>}
        </AvatarWrapper>
    );
}