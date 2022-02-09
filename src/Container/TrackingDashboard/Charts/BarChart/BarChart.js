import React from "react";
import {
  BarChart as Barchart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    Investor: 4000,
    StackHolder: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    Investor: 3000,
    StackHolder: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    Investor: 2000,
    StackHolder: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    Investor: 2780,
    StackHolder: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    Investor: 1890,
    StackHolder: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    Investor: 2390,
    StackHolder: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    Investor: 3490,
    StackHolder: 4300,
    amt: 2100,
  },
];

function BarChart(props) {
  return (
    <ResponsiveContainer width={340} height={280}>
      <Barchart
        width={500}
        height={280}
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
        <Bar dataKey="StackHolder" fill="#8884d8" />
        <Bar dataKey="Investor" fill="#82ca9d" />
        <Legend />
      </Barchart>
    </ResponsiveContainer>
  );
}

export default BarChart;
