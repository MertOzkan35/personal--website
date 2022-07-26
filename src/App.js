import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import bgHome from "./images/bgHome1.PNG";
import Content from "./Content";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="relative md:h-[32rem] lg:h-[38rem] xl:h-[42rem]  2xl:h-[62rem] ">
        <img
          className=" absolute -z-10 brightness-95 object-cover w-full h-full  "
          src={bgHome}
        />
        <Navbar />
        <Content />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
