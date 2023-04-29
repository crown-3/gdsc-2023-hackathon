import Container from "../../component/Container";
import { TopbarLogo } from "../../component/Topbar";
import ThreadListSpecific from "../../component/Thread/ThreadListSpecific.tsx";
import Navigation from "../../component/Navigation.tsx";

export default function Feed() {
  return (
    <Container>
      <TopbarLogo />
      <ThreadListSpecific />
      <div style={{ marginTop: "30px" }}></div>
      <ThreadListSpecific />
      <Navigation page="feed" />
    </Container>
  );
}
