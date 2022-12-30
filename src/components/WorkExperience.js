import { useState } from "react";
import "../styles/workExperience.css";
import getYearBetweenTwoDate from "../helpers";

function WorkExperience(props) {
  let { workNum, setWorkNum, setWorkYear } = props;
  let [items, setItems] = useState([{ itemId: "1" }]);
  let [itemNum, setItemNum] = useState(2);

  let year = 0;
  if (items) {
    items.forEach(item => {
      if (item.startdate && item.enddate) {
        year = year + getYearBetweenTwoDate(item.startdate, item.enddate)
      }
    })
  }
  setWorkYear(year)

  const addItem = () => {
    setItemNum(itemNum + 1);
    setItems(
      items.concat({
        itemId: itemNum.toString(),
      })
    );
    setWorkNum(workNum + 1);
  };

  return (
    <div className="accordion" id="accordionExample">
      {items &&
        items.map((item) => {
          return (
            <WorkExperienceItem
              targetId={item.itemId}
              allItems={items}
              setItems={setItems}
              workNum={workNum}
              setWorkNum={setWorkNum}
            />
          );
        })}
      <button type="button" className="btn btn-primary" onClick={addItem}>
        Add
      </button>
    </div>
  );
}

function WorkExperienceItem(props) {
  let {
    targetId,
    allItems,
    setItems,
    workNum,
    setWorkNum,
  } = props;
  let [company, setCompany] = useState("");
  let [title, setTitle] = useState("");
  let [startdate, setStartdate] = useState(null);
  let [enddate, setEnddate] = useState(null);

  const handleChangeCompany = (e) => {
    setCompany(e.target.value);
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeStartDate = (e) => {
    let date = new Date(e.target.value);
    setStartdate(date);
    if (allItems) {
      setItems(allItems.map((item) => {
        if (item.itemId === targetId) {
          return {...item, startdate: date }
        } else {
          return item
        }
      }));
    };
  };
  const handleChangeEndDate = (e) => {
    let date = new Date(e.target.value);
    setEnddate(date);
    if (allItems) {
      setItems(allItems.map((item) => {
        if (item.itemId === targetId) {
          return {...item, enddate: date }
        } else {
          return item
        }
      }));
    };
  };
  const deleteHandler = () => {
    setItems(allItems.filter((item) => item.itemId !== targetId));
    setWorkNum(workNum - 1);
  };

  const dataBsTarget = "#" + targetId;
  return (
    <div className="accordion-item">
      <div className="accordion-header" id="headingOne">
        <div className="item-input">
          <div className="item-singleinput">
            <label htmlFor="company">
              <strong>Company Name</strong>
            </label>
            <input
              type="text"
              id="company"
              onChange={handleChangeCompany}
            ></input>
          </div>
          <div className="item-singleinput">
            <label htmlFor="title">
              <strong>Job Title</strong>
            </label>
            <input type="text" id="title" onChange={handleChangeTitle}></input>
          </div>
          <div className="item-singleinput">
            <label htmlFor="startdate">
              <strong>Start Date</strong>
            </label>
            <input
              type="month"
              id="startdate"
              onChange={handleChangeStartDate}
            ></input>
          </div>
          <div className="item-singleinput">
            <label htmlFor="enddate">
              <strong>End Date</strong>
            </label>
            <input
              type="month"
              id="enddate"
              onChange={handleChangeEndDate}
            ></input>
          </div>
        </div>
        <div className="item-btn">
          <button
            className="btn btn-link"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={dataBsTarget}
            aria-expanded="true"
            aria-controls={targetId}
          >
            Show Details
          </button>
          <button type="button" className="btn btn-danger" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      <div
        id={targetId}
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
