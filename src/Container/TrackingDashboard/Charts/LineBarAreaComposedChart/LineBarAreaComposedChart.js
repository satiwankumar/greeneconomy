import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    Investor: 590,
    StackHolder: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "Page B",
    Investor: 868,
    StackHolder: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "Page C",
    Investor: 1397,
    StackHolder: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "Page D",
    Investor: 1480,
    StackHolder: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "Page E",
    Investor: 1520,
    StackHolder: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "Page F",
    Investor: 1400,
    StackHolder: 680,
    amt: 1700,
    cnt: 380,
  },
];

function LineBarAreaComposedChart(props) {
  return (
    <ResponsiveContainer width={300} height={300}>
      <ComposedChart width={500} height={400} data={data}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="StackHolder" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="Investor" stroke="#ff7300" />
        <Scatter dataKey="cnt" fill="red" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default LineBarAreaComposedChart;
