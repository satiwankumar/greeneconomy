import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const series = [
  {
    name: "Series 1",
    data: [
      { category: "A", value: Math.random() },
      { category: "B", value: Math.random() },
      { category: "C", value: Math.random() },
      { category: "D", value: Math.random() },
      { category: "E", value: Math.random() },
      { category: "F", value: Math.random() },
    ],
  },
];

function MultiSeriesLineChart(props) {
  return (
    <ResponsiveContainer width={260} height={260}>
      <LineChart width={500} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="category"
          type="category"
          allowDuplicatedCategory={false}
        />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend />
        {series.map((s) => (
          <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default MultiSeriesLineChart;
