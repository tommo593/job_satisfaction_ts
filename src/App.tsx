import React, { useState } from "react";
import "./index.css";
import Slider from "./components/Slider";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const [questionAnswers, setQuestionAnswers] = useState<any>({
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    q5: 0,
    q6: 0,
  });

  const [open, setOpen] = useState<boolean>(false);

  // Logic for slider score
  const handleSliderChange = (question: string, value: number) => {
    const newAnswers = {
      ...questionAnswers,
      [question]: value,
    };
    setQuestionAnswers(newAnswers);
  };

  // Calculates total score
  const totalScore: any = Object.values(questionAnswers).reduce(
    (accumulator: any, currentVal: any) => accumulator + currentVal,
    0
  );

  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
      </div>
      <div className="px-4 m-auto">
        <div className="py-8">
          <Header />
        </div>
        <div className="py-8 mb-4 rounded-lg bg-slider_bg">
          <p>
            How likely is it that you'll get promoted within the next 2 years?
          </p>
          <Slider question="q1" onSliderChange={handleSliderChange} />
        </div>
        <div className="py-8 mb-4 rounded-lg bg-slider_bg">
          <p>How much do you enjoy your current role?</p>
          <Slider question="q2" onSliderChange={handleSliderChange} />
        </div>
        <div className="py-8 mb-4 rounded-lg bg-slider_bg">
          <p>How satisfied are you with your current pay?</p>
          <Slider question="q3" onSliderChange={handleSliderChange} />
        </div>
        <div className="py-8 mb-4 rounded-lg bg-slider_bg">
          <p>How would you rate your development since starting with us?</p>
          <Slider question="q4" onSliderChange={handleSliderChange} />
        </div>
        <div className="py-8 mb-4 rounded-lg bg-slider_bg">
          <p>How satisfied are you with the level of support you receive?</p>
          <Slider question="q5" onSliderChange={handleSliderChange} />
        </div>
        <div className="py-8 mb-4 rounded-lg bg-slider_bg">
          <p>How satisfied are you with your contributions so far?</p>
          <Slider question="q6" onSliderChange={handleSliderChange} />
        </div>
      </div>
      <div className="py-8">
        <button
          onClick={() => setOpen(!open)}
          className="font-bold transition-all hover:bg-purple-900 active:bg-purple-600 duration-300 rounded p-2"
        >
          Results
        </button>
        {open && <p className="py-16">Total Score: {totalScore}</p>}
      </div>
    </>
  );
};

export default App;
