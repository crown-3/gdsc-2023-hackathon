
import Container from "../../component/Container";

import {TopbarBackButton} from "../../component/Topbar";
import ThreadListSpecific from "../../component/Thread/ThreadListSpecific.tsx";

export default function Specific(){
    const dummyArray:string[] =["안녕하세요","더미데이터에요"];
    return (
        <Container>
            <TopbarBackButton title="2023.04.29. 첫 번째 스레드"/>
            <ThreadListSpecific content={dummyArray}/>

        </Container>
    );
}