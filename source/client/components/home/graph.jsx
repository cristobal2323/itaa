import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import { PieChart, Pie, Cell, Tooltip } from "recharts";

const RADIAN = Math.PI / 180;

const dataArr = (valores, clasification) => {
  const arr = [];
  console.log(valores);
  switch (clasification) {
    case "NORMAL":
      arr.push({ name: "Normal", value: 1, color: "#00C49F" });
      break;
    case "LEVE":
      arr.push({ name: "Leve", value: 1, color: "#FFBB28" });
      break;
    case "MODERADO":
      arr.push({ name: "Moderado", value: 1, color: "#F1830F" });
      break;
    case "ALTO":
      arr.push({ name: "Alto", value: 1, color: "#ff4242" });
      break;
    case "SEVERO":
      arr.push({ name: "severo", value: 1, color: "#ff4242" });
      break;
  }

  return arr;
};

const SimplePieChart = props => {
  let data = [];
  data = dataArr(props.data, props.clasification);
  return (
    <PieChart width={50} height={50}>
      <Pie
        dataKey="value"
        data={data}
        labelLine={false}
        outerRadius={20}
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default SimplePieChart;
