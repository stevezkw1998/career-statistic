import { useState } from "react";
import "../styles/workExperience.css";

function WorkExperience(props) {
  let { workNum, setWorkNum } = props;
  let [items, setItems] = useState([{ itemId: "1" }]);
  let [itemNum, setItemNum] = useState(2);

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
    <div class="accordion" id="accordionExample">
      {items &&
        items.map((item) => {
          return (
            <WorkExperienceItem
              targetId={item.itemId}
              allItmes={items}
              setItems={setItems}
              workNum={workNum}
              setWorkNum={setWorkNum}
            />
          );
        })}
      <button type="button" class="btn btn-primary" onClick={addItem}>
        Add
      </button>
    </div>
  );
}

function WorkExperienceItem(props) {
  let { targetId, allItmes, setItems, workNum, setWorkNum } = props;
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
    setStartdate(e.target.value);
  };
  const handleChangeEndDate = (e) => {
    setEnddate(e.target.value);
  };
  const deleteHandler = () => {
    setItems(allItmes.filter((item) => item.itemId !== targetId));
    setWorkNum(workNum - 1);
  };

  const dataBsTarget = "#" + targetId;
  return (
    <div class="accordion-item">
      <div class="accordion-header" id="headingOne">
        <div class="item-input">
          <div class="item-singleinput">
            <label for="company">
              <strong>Company Name</strong>
            </label>
            <input
              type="text"
              id="company"
              onChange={handleChangeCompany}
            ></input>
          </div>
          <div class="item-singleinput">
            <label for="title">
              <strong>Job Title</strong>
            </label>
            <input type="text" id="title" onChange={handleChangeTitle}></input>
          </div>
          <div class="item-singleinput">
            <label for="startdate">
              <strong>Start Date</strong>
            </label>
            <input
              type="month"
              id="startdate"
              onChange={handleChangeStartDate}
            ></input>
          </div>
          <div class="item-singleinput">
            <label for="enddate">
              <strong>End Date</strong>
            </label>
            <input
              type="month"
              id="enddate"
              onChange={handleChangeEndDate}
            ></input>
          </div>
        </div>
        <div class="item-btn">
          <button
            class="btn btn-link"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={dataBsTarget}
            aria-expanded="true"
            aria-controls={props.targetId}
          >
            Show Details
          </button>
          <button type="button" class="btn btn-danger" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      <div
        id={props.targetId}
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
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
