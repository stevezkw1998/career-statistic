import Chart from "react-apexcharts";
import "../styles/pieCharts.css";
import { liveAlert } from "../js/alerts";
import * as helpers from "../helpers";

function PieCharts(props) {
  let { items } = props;

  return (
    <div className="pie-charts-group">
      <SinglePieChart items={items} piechartType={"company"} />
      <SinglePieChart items={items} piechartType={"title"} />
      <SinglePieChart items={items} piechartType={"jobtype"} />
      <SinglePieChart items={items} piechartType={"techTags"} />
    </div>
  );
}

function SinglePieChart(props) {
  let { items, piechartType } = props;

  let labels = {};
  if (items) {
    items.forEach((item) => {
      if (item[piechartType] && item.startdate && item.enddate) {
        let month = helpers.getMonthBetweenTwoDate(
          item.startdate,
          item.enddate
        );
        if (piechartType in { jobtype: 0, techTags: 0 }) {
          item[piechartType].forEach((subItem) => {
            if (subItem in labels) {
              labels[subItem] += month;
            } else {
              labels[subItem] = month;
            }
          });
        } else {
          if (item[piechartType] in labels) {
            labels[item[piechartType]] += month;
          } else {
            labels[item[piechartType]] = month;
          }
        }
      }
    });
  }
  if (Object.getOwnPropertyNames(labels).length === 0) {
    // liveAlert(
    //   `Primary: Enter adequate information to generate ${piechartType} pie chart.`,
    //   "primary"
    // );
    return (
      <div className="pie-chart-container" id="company-pie-chart-container">
        <div class="alert alert-primary alert-dismissible" role="alert">
          <div>
            Primary: Enter adequate information to generate {piechartType} pie
            chart.
          </div>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    );
  }
  let series = Object.values(labels);
  labels = Object.keys(labels);
  let options = {
    chart: { type: "pie" },
    labels: labels,
  };

  return (
    <div className="pie-chart-container" id="company-pie-chart-container">
      <Chart options={options} series={series} type="pie" width={380} />
    </div>
  );
}

export { PieCharts };
