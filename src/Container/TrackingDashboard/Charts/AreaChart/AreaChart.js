import React from "react";
import {
  AreaChart as Areachart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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

function AreaChart(props) {
  return (
    <ResponsiveContainer width={300} height={300}>
      <Areachart width={500} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="StackHolder"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="Investor"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="amt"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </Areachart>
    </ResponsiveContainer>
  );
}

export default AreaChart;
