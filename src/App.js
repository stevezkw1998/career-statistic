// import logo from './logo.svg';
import { useState } from "react";
import "./styles/App.css";
import WorkExperience from "./components/WorkExperience";
import Summary from "./components/Summary";
import { PieCharts } from "./components/PieCharts";

function App() {
  let [items, setItems] = useState([
    {
      itemId: "1",
      company: "",
      title: "",
      startdate: null,
      enddate: null,
      jobtype: [],
      techTags: [],
    },
  ]);
  let [itemNum, setItemNum] = useState(2);
  let [workNum, setWorkNum] = useState(1);
  let [workYear, setWorkYear] = useState(0);

  return (
    <div className="App">
      <WorkExperience
        items={items}
        setItems={setItems}
        itemNum={itemNum}
        setItemNum={setItemNum}
        workNum={workNum}
        setWorkNum={setWorkNum}
        setWorkYear={setWorkYear}
      />
      <Summary workNum={workNum} workYear={workYear} />
      <PieCharts items={items} />
    </div>
  );
}

export default App;
