import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Tokenomoics from "./Components/Tokenomoics/Tokenomoics";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import RoadMap from "./Components/RoadMap/RoadMap";
import Faq from "./Components/Faq/Faq";
import Login from "./Admin/Login/Login";
import Dashboard from "./Admin/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Team from "./Components/Team/Team";

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
          <Route path="/team" element={<Team/>} />
          <Route path="/adminLogin" element={<Login/>} />
      
          <Route
          path="/DashBoard"
          element={
            <PrivateRoute>
             <Dashboard/>
            </PrivateRoute>
          }
        />
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
