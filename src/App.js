import Footer from "./components/Footer";
import HowDriver from "./components/HowDirver";
import HowPassenger from "./components/HowPassenger";
import { HowWork } from "./components/HowWork";
import MobaileApp from "./components/MobaileApp";
import SectionFeatures from "./components/SectionFeatures";
import SectionHow from "./components/SectionHow";

function App() {
  return (
    <div className="container max-w-[1000px] bg-white mx-auto h-screen">
      {/* <SectionFeatures/> */}
      {/* <SectionHow/> */}
      <HowWork/>
      <HowPassenger/>
      <HowDriver/>
     <Footer/>
    </div>
  );
}

export default App;
