import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Tokenomoics from "./Components/Tokenomoics/Tokenomoics";
import Analysis from "./Admin/Analysis/Analysis"
import Home from "./Components/Home/Home";
import FaqQustionAndAnswer from "./Admin/FaqQustionAndAnswer/FaqQustionAndAnswer";
import AboutText from "./Admin/AboutText/AboutText";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import HolderAndPrice from "./Admin/HolderAndPrice/HolderAndPrice";
import RoadMap from "./Components/RoadMap/RoadMap";
import Faq from "./Components/Faq/Faq";
import Login from "./Admin/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="background">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="/Tokenomoics" element={<Tokenomoics />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/roadMap" element={<RoadMap/>} />
          <Route path="/FAQ" element={<Faq/>} />
          <Route path="/adminLogin" element={<Login/>} />
          <Route path="/analysis" element={<Analysis/>} />
          <Route path="/holderAndPrice" element={<HolderAndPrice/>} />
          <Route path="/FaqQustion" element={<FaqQustionAndAnswer/>} />
          <Route path="/aboutText" element={<AboutText/>} />
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
