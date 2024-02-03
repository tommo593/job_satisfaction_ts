import React, { useState } from "react";

type SliderProps = {
  onSliderChange: (value: number) => void;
};

const Slider: React.FC<SliderProps> = ({ onSliderChange }) => {
  const [value, setValue] = useState<number>(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
    onSliderChange(newValue);
  };

  return (
    <div className="py-4">
      <div className="flex justify-between px-60 py-4">
        <p>0 = least satisfied</p>
        <p>10 = most satisfied</p>
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
      <p>
        Score: <strong>{value}</strong>
      </p>
    </div>
  );
};

export default Slider;
