import "./App.css";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import MyMain from "./components/MyMain";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <MyNavbar />
      <MyHeader />
      <MyMain />
      <MyFooter />
    </>
  );
}

export default App;
