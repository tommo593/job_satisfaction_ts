import React, { useState } from "react";

const Slider: React.FC = () => {
  const [value, setValue] = useState<number>(0); // Initialize state with type annotation

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value, 10)); // Parse value as integer
  };

  return (
    <div className="py-5">
      <input
        type="range"
        min="0"
        max="10"
        value={value} // Use state value
        className="slider"
        id="myRange"
        onChange={handleSliderChange} // Handle change event
      />
      <div className="inline justify-between">
        <p>0 = least satisfied</p>
        <p>10 = most satisfied</p>
      </div>
      <p>
        Score: <strong>{value}</strong>
      </p>{" "}
      {/* Display current value */}
    </div>
  );
};

export default Slider;
