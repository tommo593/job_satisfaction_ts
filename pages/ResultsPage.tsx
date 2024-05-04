import React from "react";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";

interface Props {
  totalScore: number;
}

const ResultsPage: React.FC<Props> = ({ totalScore }) => {
  const scoreResults = () => {
    if (totalScore < 21) {
      return <p>You earned a low score</p>;
    } else if (totalScore > 20 && totalScore < 40) {
      return <p>You earned a mid score</p>;
    } else {
      return <p>You earned a high score</p>;
    }
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
