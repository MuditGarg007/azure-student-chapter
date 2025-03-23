import "./App.css";
import HomePage from "./landing_page/home/HomePage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JoinPage from "./landing_page/join/JoinPage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/join" element={<JoinPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
