import "../styles/workExperience.css";
import * as helpers from "../helpers";
import { SWETitles } from "../constant/sweTitles";
import { SWETypes } from "../constant/sweTypes";
import { programmingLanguages } from "../constant/techstack";

function WorkExperience(props) {
  let {
    items,
    setItems,
    itemNum,
    setItemNum,
    workNum,
    setWorkNum,
    setWorkYear,
  } = props;

  let year = 0;
  if (items) {
    items.forEach((item) => {
      if (item.startdate && item.enddate) {
        year =
          year + helpers.getYearBetweenTwoDate(item.startdate, item.enddate);
      }
    });
  }
  setWorkYear(year);

  const addItem = () => {
    setItemNum(itemNum + 1);
    setItems(
      items.concat({
        itemId: itemNum.toString(),
        company: "",
        title: "",
        startdate: null,
        enddate: null,
        jobtype: [],
        techTags: [],
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
              key={item.itemId}
              targetId={item.itemId}
              allItems={items}
              setItems={setItems}
              workNum={workNum}
              setWorkNum={setWorkNum}
              company={item.company}
              title={item.title}
              startdate={item.startdate}
              enddate={item.enddate}
              jobtype={item.jobtype}
              techTags={item.techTags}
            />
          );
        })}
      <button type="button" className="btn btn-primary" onClick={addItem}>
        Add
      </button>
      <datalist id="swe-title-list">
        {SWETitles &&
          SWETitles.map((title) => {
            return <option value={title} />;
          })}
        ;
      </datalist>
      <datalist id="swe-type-list">
        {SWETypes &&
          SWETypes.map((jobtype) => {
            return <option value={jobtype} />;
          })}
        ;
      </datalist>
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
    company,
    title,
    startdate,
    enddate,
    jobtype,
    techTags,
  } = props;

  const handleChangeCompany = (e) => {
    let company = e.target.value;
    if (allItems) {
      setItems(
        allItems.map((item) => {
          if (item.itemId === targetId) {
            return { ...item, company: company };
          } else {
            return item;
          }
        })
      );
    }
  };
  const handleChangeTitle = (e) => {
    let title = e.target.value;
    if (allItems) {
      setItems(
        allItems.map((item) => {
          if (item.itemId === targetId) {
            return { ...item, title: title };
          } else {
            return item;
          }
        })
      );
    }
  };
  const handleChangeStartDate = (e) => {
    let date = new Date(e.target.value);
    if (allItems) {
      setItems(
        allItems.map((item) => {
          if (item.itemId === targetId) {
            return { ...item, startdate: date };
          } else {
            return item;
          }
        })
      );
    }
  };
  const handleChangeEndDate = (e) => {
    let date = new Date(e.target.value);
    if (allItems) {
      setItems(
        allItems.map((item) => {
          if (item.itemId === targetId) {
            return { ...item, enddate: date };
          } else {
            return item;
          }
        })
      );
    }
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
              value={company}
              onChange={handleChangeCompany}
            ></input>
          </div>
          <div className="item-singleinput">
            <label htmlFor="title">
              <strong>Job Title</strong>
            </label>
            <input
              type="text"
              id="title"
              list="swe-title-list"
              value={title}
              onChange={handleChangeTitle}
            ></input>
          </div>
          <div className="item-singleinput">
            <label htmlFor="startdate">
              <strong>Start Date</strong>
            </label>
            <input
              type="month"
              id="startdate"
              value={helpers.dateToMonth(startdate)}
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
              value={helpers.dateToMonth(enddate)}
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
          <button
            type="button"
            className="btn btn-danger"
            onClick={deleteHandler}
          >
            Delete
          </button>
        </div>
      </div>
      <WorkItemDetail
        targetId={targetId}
        allItems={allItems}
        setItems={setItems}
        jobtype={jobtype}
        techTags={techTags}
      ></WorkItemDetail>
    </div>
  );
}

function WorkItemDetail(props) {
  let { targetId, allItems, setItems, jobtype, techTags } = props;

  const addSWEType = (e) => {
    let addingType = e.target.innerText;
    let newjobtype = jobtype.filter((typeItem) => typeItem !== addingType);
    newjobtype.push(addingType);
    if (allItems) {
      setItems(
        allItems.map((item) => {
          if (item.itemId === targetId) {
            return { ...item, jobtype: newjobtype };
          } else {
            return item;
          }
        })
      );
    }
  };

  const removeSWEType = (e) => {
    let addingType = e.target.parentElement.innerText;
    let newjobtype = jobtype.filter((typeItem) => typeItem !== addingType);
    if (allItems) {
      setItems(
        allItems.map((item) => {
          if (item.itemId === targetId) {
            return { ...item, jobtype: newjobtype };
          } else {
            return item;
          }
        })
      );
    }
  };

  const addTechTag = (e) => {
    let tech = e.target.innerText;
    let newTechTags = techTags.filter((tag) => tag !== tech);
    newTechTags.push(tech);
    if (allItems) {
      setItems(
        allItems.map((item) => {
          if (item.itemId === targetId) {
            return { ...item, techTags: newTechTags };
          } else {
            return item;
          }
        })
      );
    }
  };

  const removeTechTag = (e) => {
    let tech = e.target.parentElement.innerText;
    let newTechTags = techTags.filter((tag) => tag !== tech);
    if (allItems) {
      setItems(
        allItems.map((item) => {
          if (item.itemId === targetId) {
            return { ...item, techTags: newTechTags };
          } else {
            return item;
          }
        })
      );
    }
  };

  return (
    <div
      id={targetId}
      className="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  TYPE
                </a>
                <ul class="dropdown-menu">
                  {SWETypes &&
                    SWETypes.map((typeItem) => {
                      return (
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={addSWEType}
                          >
                            {typeItem}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </li>
              {jobtype &&
                jobtype.map((typeItem) => {
                  return (
                    <li
                      style={{
                        position: "relative",
                        top: "7px",
                        marginLeft: "7px",
                      }}
                    >
                      <span class="badge rounded-pill text-bg-light">
                        {typeItem}
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                          onClick={removeSWEType}
                        ></button>
                      </span>
                    </li>
                  );
                })}
            </ul>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ADD
                </a>
                <ul class="dropdown-menu">
                  {programmingLanguages &&
                    Object.keys(programmingLanguages).map((language) => {
                      return (
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={addTechTag}
                          >
                            {language}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </li>
              {techTags &&
                techTags.map((language) => {
                  return (
                    <li
                      style={{
                        position: "relative",
                        top: "7px",
                        marginLeft: "7px",
                      }}
                    >
                      <span class={programmingLanguages[language]}>
                        {language}
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                          onClick={removeTechTag}
                        ></button>
                      </span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </nav>
      <div className="accordion-body">
        {/* <strong>This is the first item's accordion body.</strong> It is shown by
        default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance,
        as well as the showing and hiding via CSS transitions. You can modify
        any of this with custom CSS or overriding our default variables. It's
        also worth noting that just about any HTML can go within the{" "}
        <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  );
}

export default WorkExperience;
