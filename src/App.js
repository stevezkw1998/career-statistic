// import logo from './logo.svg';
import { useState } from "react";
import "./styles/App.css";
import WorkExperience from "./components/WorkExperience";
import Summary from "./components/Summary";
import { PieCharts } from "./components/PieCharts";

const initializeStorageData = () => {
  if (!localStorage.hasOwnProperty("data")) {
    localStorage.setItem("data", JSON.stringify({}));
  }
};

const fetchLocalStorageData = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  const itemsInitial =
    data && data.items
      ? data.items
      : [
          {
            itemId: "1",
            company: "",
            title: "",
            startdate: null,
            enddate: null,
            jobtype: [],
            techTags: [],
          },
        ];
  const itemNumInitial = data && data.itemNum ? data.itemNum : 2;
  const workNumInitial = data && data.workNum ? data.workNum : 1;
  const workYearInitial = data && data.workYear ? data.workYear : 0;

  return [itemsInitial, itemNumInitial, workNumInitial, workYearInitial];
};

function App() {
  initializeStorageData();
  let [itemsInitial, itemNumInitial, workNumInitial, workYearInitial] =
    fetchLocalStorageData();

  let [items, setItems] = useState(itemsInitial);
  let [itemNum, setItemNum] = useState(itemNumInitial);
  let [workNum, setWorkNum] = useState(workNumInitial);
  let [workYear, setWorkYear] = useState(workYearInitial);

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
