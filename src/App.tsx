import "./App.css";
import "./index.css";
import Slider from "./components/Slider";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div>
        <div>
          <h1 className="py-8">Employee Satisfaction Survey</h1>
        </div>
        <div className="py-8">
          <Header />
        </div>
        <div className="py-8 shadow">
          <p>
            How likely do you think you'll get promoted within the next 2 years?
          </p>
          <Slider />
        </div>
        <div className="py-8 shadow">
          <p>How much do you enjoy your current role?</p>
          <Slider />
        </div>
        <div className="py-8 shadow">
          <p>How satisfied are you with your current pay?</p>
          <Slider />
        </div>
        <div className="py-8 shadow">
          <p>How would you rate your development since starting with us?</p>
          <Slider />
        </div>
        <div className="py-8 shadow">
          <p>How satisfied are you with the level of support you receive?</p>
          <Slider />
        </div>
        <div className="py-8 shadow">
          <p>How satisfied are you with your contributions so far?</p>
          <Slider />
        </div>
      </div>
    </>
  );
}

export default App;
