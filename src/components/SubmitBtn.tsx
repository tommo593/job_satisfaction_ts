import React from "react";

type SubmitBtnProps = {
  type: "button" | "submit";
  title: string;
};

const SubmitBtn: React.FC<SubmitBtnProps> = () => {
  return (
    <div>
      <button
        type="submit"
        title="Submit"
        className="transition-all hover:bg-purple-900 active:bg-purple-600 px-8 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitBtn;
