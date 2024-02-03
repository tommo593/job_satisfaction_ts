import React from "react";

type SubmitBtnProps = {
  onClick: () => void;
};

const SubmitBtn: React.FC<SubmitBtnProps> = ({ onClick }) => {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className="border border-purple-800 bg-purple-400 px-4 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitBtn;
