import styled from "styled-components";
import BackImg from "../assets/back.png";

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
        default : {
            srcRef = BackImg; break;
        }
    }

    return (
        <AvatarWrapper>
            <img src={srcRef}/>
        </AvatarWrapper>
    );
}