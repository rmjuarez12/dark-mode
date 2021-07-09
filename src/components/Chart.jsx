import React from "react";
import moment from "moment";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const Chart = ({ sparklineData, darkMode }) => {
  const formattedData = sparklineData
    .map((price, idx) => {
      if (idx % 6 === 0) {
        const timeToSubtract = 168 - idx;
        const date = moment()
          .subtract(timeToSubtract, "hours")
          .format("ddd h:mma");
        return { value: price, date };
      } else if (idx === sparklineData.length - 1) {
        const date = moment().format("ddd h:mma");
        return { value: price, date };
      }
      return null;
    })
    .filter((data) => data);

  return (
    <BarChart width={1100} height={300} data={formattedData}>
      <Bar
        type='monotone'
        dataKey='value'
        fill={darkMode ? "#eb4d4b" : "#4834d4"}
        barSize={20}
      />
      <CartesianGrid
        stroke={darkMode ? "#c7ecee" : "#ccc"}
        strokeDasharray='5 5'
      />
      <XAxis dataKey='date' interval={3} />
      <Tooltip />
      <YAxis />
    </BarChart>
  );
};

export default Chart;
