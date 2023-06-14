
import Header from "./components/Header";
import "./index.css";
import Home from "./pages/Home";
import HowDriver from "./pages/HowDirver";
import HowPassenger from "./pages/HowPassenger";
import { HowWork } from "./pages/HowWork";

function App() {
  return (
    <div className="container max-w-[1000px] bg-white mx-auto h-screen">
      <Header/>
      {/* <Home/> */}
     <HowWork/>
     <HowDriver/>
     <HowPassenger/>
    </div>
  );
}

export default App;
