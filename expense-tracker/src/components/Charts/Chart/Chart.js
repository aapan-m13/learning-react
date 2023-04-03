import React from "react";
import "./Chart.css";
import ChartBar from "../ChartBar/ChartBar";

export default function Chart(props) {
  const dataPointValues = props.dataPoints.map((dp) => {
    return dp.value;
  });
  const totalMax = Math.max(...dataPointValues);
  const chartBars = props.dataPoints.map((dataPoint) => {
    return (
      <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMax}
        label={dataPoint.label}
      ></ChartBar>
    );
  });
  return <div className="chart">{chartBars}</div>;
}
