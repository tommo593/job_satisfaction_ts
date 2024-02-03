import React, { useState } from "react";

import "./App.css";
import "./index.css";
import Slider from "./components/Slider";
import Header from "./components/Header";
import Results from "./components/Results";
import SubmitBtn from "./components/SubmitBtn";

const App: React.FC = () => {
  const [totalScore, setTotalScore] = useState<number>(0);

  const handleSliderChange = (value: number) => {
    setTotalScore(totalScore + value);
  };

  const handleSubmit = () => {
    console.log("Total score:", totalScore);
  };

  return (
    <>
      <div>
        <div>
          <h1 className="py-8">Employee Satisfaction Survey</h1>
        </div>
        <div className="py-8">
          <Header />
        </div>
        <div className="py-8 shadow">
          <p>
            How likely do you think you'll get promoted within the next 2 years?
          </p>
          <Slider onSliderChange={handleSliderChange} />
        </div>
        <div className="py-8 shadow">
          <p>How much do you enjoy your current role?</p>
          <Slider onSliderChange={handleSliderChange} />
        </div>
        <div className="py-8 shadow">
          <p>How satisfied are you with your current pay?</p>
          <Slider onSliderChange={handleSliderChange} />
        </div>
        <div className="py-8 shadow">
          <p>How would you rate your development since starting with us?</p>
          <Slider onSliderChange={handleSliderChange} />
        </div>
        <div className="py-8 shadow">
          <p>How satisfied are you with the level of support you receive?</p>
          <Slider onSliderChange={handleSliderChange} />
        </div>
        <div className="py-8 shadow">
          <p>How satisfied are you with your contributions so far?</p>
          <Slider onSliderChange={handleSliderChange} />
        </div>
      </div>
      <div className="py-8">
        <p className="py-4">{totalScore}</p>
        <SubmitBtn onClick={handleSubmit} />
      </div>
      <div className="py-8">
        <Results />
      </div>
    </>
  );
};

export default App;
