import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="px-8">
          <Header />
        </div>
        <p className="text-xl font-bold">
          Click the arrow below to get started
        </p>
        <a href="/info">
          <button className="bg-button_bg hover:bg-slider_bg transition duration-300 px-8 py-4 rounded text-lg mt-8">
            <FaArrowRightLong />
          </button>
        </a>
      </div>
      <Footer />
    </>
  );
};

export default App;
