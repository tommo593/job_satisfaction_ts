import React from "react";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";

interface Props {
  totalScore: number;
}

const ResultsPage: React.FC<Props> = ({ totalScore }) => {
  const scoreResults = () => {
    let result;
    if (totalScore < 21) {
      result = <p>You earned a low score</p>;
    } else if (totalScore > 20 && totalScore < 40) {
      result = <p>You earned a mid score</p>;
    } else {
      result = <p>You earned a high score</p>;
    }
    console.log({ result }); // Move console.log here
    return result; // Return result here
  };

  return (
    <div>
      <Navbar />
      {scoreResults()}
      <Footer />
    </div>
  );
};

export default ResultsPage;
