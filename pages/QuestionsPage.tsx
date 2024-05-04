import { useState } from "react";
import Slider from "../src/components/Slider";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

const QuestionsPage = () => {
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
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="bg-button_bg hover:bg-slider_bg transition duration-300 px-8 py-4 rounded text-xl"
        >
          Results
        </button>
        {open && (
          <p className="py-8 text-xl font-bold">Total Score: {totalScore}</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default QuestionsPage;
