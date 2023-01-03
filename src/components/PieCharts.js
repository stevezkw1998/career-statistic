import { useState } from "react";
import Chart from "react-apexcharts";
import * as helpers from "../helpers";

function PieCharts(props) {
  let { items } = props;

  return (
    <div className="pie-charts-group">
      <CompanyPieChart items={items} />
      <TitlePieChart items={items} />
      <TechPieChart items={items} />
      <TechPieChart items={items} />
    </div>
  );
}

function CompanyPieChart(props) {
  let { items } = props;

  let labels = {};
  if (items) {
    items.forEach((item) => {
      if (item.company && item.startdate && item.enddate) {
        let month = helpers.getMonthBetweenTwoDate(
          item.startdate,
          item.enddate
        );
        if (item.company in labels) {
          labels[item.company] += month;
        } else {
          labels[item.company] = month;
        }
      }
    });
  }
  if (Object.getOwnPropertyNames(labels).length === 0) {
    return (
      <div className="pie-chart-container" id="company-pie-chart-container">
        <h3 style={{ color: "blue" }}>Company Pie Chart lacks data</h3>
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

function TitlePieChart(props) {
  let { items } = props;

  let labels = {};
  if (items) {
    items.forEach((item) => {
      if (item.title && item.startdate && item.enddate) {
        let month = helpers.getMonthBetweenTwoDate(
          item.startdate,
          item.enddate
        );
        if (item.title in labels) {
          labels[item.title] += month;
        } else {
          labels[item.title] = month;
        }
      }
    });
  }
  if (Object.getOwnPropertyNames(labels).length === 0) {
    return (
      <div className="pie-chart-container" id="title-pie-chart-container">
        <h3 style={{ color: "blue" }}>Title Pie Chart lacks data</h3>
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
    <div className="pie-chart-container" id="title-pie-chart-container">
      <Chart options={options} series={series} type="pie" width={380} />
    </div>
  );
}

function TechPieChart(props) {
  let { items } = props;

  let labels = {};
  if (items) {
    items.forEach((item) => {
      if (item.techTags && item.startdate && item.enddate) {
        let month = helpers.getMonthBetweenTwoDate(
          item.startdate,
          item.enddate
        );
        item.techTags.forEach((tech) => {
          if (tech in labels) {
            labels[tech] += month;
          } else {
            labels[tech] = month;
          }
        });
      }
    });
  }
  if (Object.getOwnPropertyNames(labels).length === 0) {
    return (
      <div className="pie-chart-container" id="tech-pie-chart-container">
        <h3 style={{ color: "blue" }}>Tech Pie Chart lacks data</h3>
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
    <div className="pie-chart-container" id="tech-pie-chart-container">
      <Chart options={options} series={series} type="pie" width={380} />
    </div>
  );
}

export { PieCharts };
