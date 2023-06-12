
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./components/homePage/HomePage";
import "./index.css";

function App() {
  return (
    <div className="bg-[#B2C8CA]">
      <div className="container mx-auto">
     <Header/>
     <HomePage/>
     <Footer/>
      </div>
    </div>
  );
}

export default App;
