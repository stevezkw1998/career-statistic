import { useState } from 'react';
import '../styles/workExperience.css';

function WorkExperience() {
  let [items, setItems] = useState([]);
  let [itemNum, setItemNum] = useState(2);

  const addItem = () => {
    setItemNum(itemNum+1)
    setItems(items.concat({
      id: itemNum.toString(),
    }))
  }

  return (
    <div class="accordion" id="accordionExample">
        <WorkExperienceItem targetId="1"/>
        <WorkExperienceItem targetId="2"/>
        {items && items.map((item) => {
          return <WorkExperienceItem targetId={item.id}/>
        })}
        <button type="button" class="btn btn-primary" onClick={addItem}>Add</button>
    </div>
  );
}

function WorkExperienceItem(props) {
  const dataBsTarget = "#"+props.targetId
  return (
    <div class="accordion-item">
      <div class="accordion-header" id="headingOne">
        <div class="item-input">
          <div><label for="company"><strong>Company Name</strong></label>
          <input type="text" id="company"></input></div>
          <div><label for="title"><strong>Job Title</strong></label>
          <input type="text" id="title"></input></div>
          <div><label for="startdate"><strong>Start Date</strong></label>
          <input type="date" id="startdate"></input></div>
          <div><label for="enddate"><strong>End Date</strong></label>
          <input type="date" id="enddate"></input></div>
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
          <button type="button" class="btn btn-danger">
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
