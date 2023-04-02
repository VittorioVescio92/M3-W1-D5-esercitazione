import "./App.css";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import MyMain from "./components/MyMain";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import ProfilePage from "./components/ProfilePage";

function App() {
  const url = window.location.pathname;

  if (url === "/profile") {
    return (
      <>
        <MyNavbar />
        <ProfilePage />
        <MyFooter />
      </>
    );
  } else {
    return (
      <>
        <MyNavbar />
        <Container className="container-fluid justify-content-center px-1">
          <MyHeader />
        </Container>
        <MyMain />
        <MyFooter />
      </>
    );
  }
}

export default App;
