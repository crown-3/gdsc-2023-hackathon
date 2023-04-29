import Container from "../../component/Container";
import { TopbarLogo } from "../../component/Topbar";
import ThreadListSpecific from "../../component/Thread/ThreadListSpecific.tsx";
import Navigation from "../../component/Navigation.tsx";

export default function Feed() {
  return (
    <Container>
      <TopbarLogo />
      <ThreadListSpecific content={["안녕하세요","더미데이터에요"]}/>
      <div style={{ marginTop: "30px" }}></div>
      <Navigation page="feed" />
    </Container>
  );
}
