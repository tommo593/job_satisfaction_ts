import React, { useState } from "react";

type SliderProps = {
  onSliderChange: (question: string, value: number) => void;
  question: string;
};

const Slider: React.FC<SliderProps> = ({ onSliderChange, question }) => {
  const [value, setValue] = useState<number>(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("???");
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
    onSliderChange(question, newValue);
  };

  return (
    <div className="py-4">
      <div className="flex flex-row justify-center gap-8 py-4">
        <p>0 = least positive</p>
        <p>10 = most positive</p>
      </div>
      <input
        type="range"
        min="0"
        max="10"
        value={value}
        className="slider"
        id="myRange"
        onChange={handleSliderChange}
      />
      <p>Score: {value}</p>
    </div>
  );
};

export default Slider;
