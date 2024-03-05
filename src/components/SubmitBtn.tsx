import React from "react";

type SubmitBtnProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  onClick: void;
  type: "button" | "submit";
  title: string;
};

const SubmitBtn: React.FC<SubmitBtnProps> = (props: SubmitBtnProps) => {
  return (
    <div>
      <button
        onClick={(event) => props.handleClick(event, 1)}
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
