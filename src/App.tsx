import "./App.css";
import "./index.css";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <div>
        <h1 className="border border-red-500 py-20">
          Employee Satisfaction Survey
        </h1>
        <Slider />
        <Slider />
        <Slider />
        <Slider />
        <Slider />
      </div>
    </>
  );
}

export default App;
