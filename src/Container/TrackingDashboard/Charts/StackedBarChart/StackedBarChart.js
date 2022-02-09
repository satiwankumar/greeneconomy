import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./StackedBarChart.scss";

const data = [
  {
    name: "Page A",
    StackHolder: 4000,
    Investor: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    StackHolder: 3000,
    Investor: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    StackHolder: 2000,
    Investor: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    StackHolder: 2780,
    Investor: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    StackHolder: 1890,
    Investor: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    StackHolder: 2390,
    Investor: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    StackHolder: 3490,
    Investor: 4300,
    amt: 2100,
  },
];

function StackedBarChart(props) {
  return (
    <ResponsiveContainer width={300} height={300}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 0,
          right: 10,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Investor" stackId="a" fill="#3894d8" />
        <Bar dataKey="StackHolder" stackId="a" fill="#22489d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default StackedBarChart;
