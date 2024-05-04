import Footer from "../src/components/Footer";

const ResultsPage = () => {
  if (totalScore <= 20) {
    return (
      <p>
        You scored {totalScore} out of a potential 60 points. We're sorry we're
        not meeting the standards as you expected. Please contact your manager
        and arrange a 1:1 as soon as possible to find out what we can do to
        improve.
      </p>
    );
  } else if (totalScore <= 40) {
    return (
      <p>
        You scored {totalScore} out of a potential 60 points. This could
        indicate that there is some areas for us both to improve. Please contact
        your manager and arrange a 1:1 to find out where you can improve!
      </p>
    );
  } else {
    if (totalScore > 40) {
      return (
        <p>
          You scored {totalScore} out of a potential 60 points. We're happy that
          you're happy, keep up the great work and we're sure you'll go far in
          this company!
        </p>
      );
    }
  }

  return (
    <div>
      <Footer />
    </div>
  );
};

export default ResultsPage;
