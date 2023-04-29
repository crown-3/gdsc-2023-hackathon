import Container from "../../component/Container";
import { TopbarLogo } from "../../component/Topbar";
import ThreadListSpecific from "../../component/Thread/ThreadListSpecific.tsx";

export default function Feed() {
    return (
        <Container>
            <TopbarLogo />
            <ThreadListSpecific />
            <div style={{ paddingTop:"10px" }}>
            </div>
            <ThreadListSpecific />
        </Container>
    );
}
