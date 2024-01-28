import React, { useState } from "react";

type Slider = {
  text: string;
};

const Slider: React.FC = () => {
  const [value, setValue] = useState<number>(0); // Initialize state with type annotation

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value, 10)); // Parse value as integer
  };

  return (
    <div className="py-5">
      <div className="flex justify-between px-60 py-4">
        <p>0 = least satisfied</p>
        <p>10 = most satisfied</p>
      </div>
      <input
        type="range"
        min="0"
        max="10"
        value={value} // Use state value
        className="slider"
        id="myRange"
        onChange={handleSliderChange} // Handle change event
      />
      <p>
        Score: <strong>{value}</strong>
      </p>{" "}
      {/* Display current value */}
    </div>
  );
};

export default Slider;
