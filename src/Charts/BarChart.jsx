import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Company Performance",
  },
  colors:["rgba(53, 138, 148)", "rgba(37, 11, 165)", "#188310"],
};

export default function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="330px"
      data={data}
      options={options}
    />
  );
}
