
import Header from "./components/Header";
import "./index.css";
// import Home from "./pages/Home";
// import HowDriver from "./pages/HowDirver";
// import HowPassenger from "./pages/HowPassenger";
import { HowWork } from "./pages/HowWork";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <div className="container max-w-[1000px] bg-white mx-auto h-screen">
      <Header/>
      {/* <Home/> */}
     <RegistrationPage/>
    </div>
  );
}

export default App;
