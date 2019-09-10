import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import { PieChart, Pie, Cell, Tooltip } from "recharts";

const RADIAN = Math.PI / 180;

const dataArr = (valores, clasification) => {
  const arr = [];
  switch (clasification) {
    case "NORMAL":
      arr.push({ name: "Leve", value: valores.leve, color: "#00C49F" });
      break;
    case "LEVE":
      arr.push({ name: "Moderado", value: valores.moderado, color: "#FFBB28" });
      break;
    case "MODERADO":
      arr.push({ name: "Alto", value: valores.alto, color: "#F1830F" });
      break;
    case "SEVERO":
      arr.push({ name: "Alto", value: valores.alto, color: "#ff4242" });
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
