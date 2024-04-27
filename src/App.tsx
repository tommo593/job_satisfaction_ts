import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { FaArrowRightLong } from "react-icons/fa6";

const App: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="px-8">
          <Header />
        </div>
        <h3 className="text-lg">Click the button below to get started</h3>
        <a href="/info">
          <button className="bg-button_bg hover:bg-slider_bg transition duration-300 px-8 py-4 rounded text-lg mt-8">
            <FaArrowRightLong />
          </button>
        </a>
      </div>
    </>
  );
};

export default App;
