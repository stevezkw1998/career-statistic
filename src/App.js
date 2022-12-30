// import logo from './logo.svg';
import { useState } from "react";
import "./styles/App.css";
import WorkExperience from "./components/WorkExperience";
import Summary from "./components/Summary";

function App() {
  let [workNum, setWorkNum] = useState(1);
  let [workYear, setWorkYear] = useState(0);

  return (
    <div className="App">
      <WorkExperience workNum={workNum} setWorkNum={setWorkNum} setWorkYear={setWorkYear} />
      <Summary workNum={workNum} workYear={workYear} />
    </div>
  );
}

export default App;
