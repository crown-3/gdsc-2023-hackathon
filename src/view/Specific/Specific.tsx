
import Container from "../../component/Container";

import {TopbarBackButton} from "../../component/Topbar";
import ThreadListSpecific from "../../component/Thread/ThreadListSpecific.tsx";

export default function Specific(){
    return (
        <Container>
            <TopbarBackButton title="2023.04.29. 첫 번째 스레드"/>
            <ThreadListSpecific />

        </Container>
    );
}