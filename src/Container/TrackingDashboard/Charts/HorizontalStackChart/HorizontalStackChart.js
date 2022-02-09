import React, { PureComponent } from "react";
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
  HorizontalStackChart as Chart,
  ResponsiveContainer,
} from "recharts";
import "./HorizontalStackChart.scss";

const data = [
  {
    name: "Page A",
    Investor: 590,
    StackHolder: 800,
    amt: 1400,
  },
  {
    name: "Page B",
    Investor: 868,
    StackHolder: 967,
    amt: 1506,
  },
  {
    name: "Page C",
    Investor: 1397,
    StackHolder: 1098,
    amt: 989,
  },
  {
    name: "Page D",
    Investor: 1480,
    StackHolder: 1200,
    amt: 1228,
  },
  {
    name: "Page E",
    Investor: 1520,
    StackHolder: 1108,
    amt: 1100,
  },
  {
    name: "Page F",
    Investor: 1400,
    StackHolder: 680,
    amt: 1700,
  },
];

function HorizontalStackChart(props) {
  return (
    <ResponsiveContainer width={340} height={300}>
      <ComposedChart
        layout="vertical"
        stackOffset="expand"
        width={500}
        height={400}
        data={data}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" scale="band" />
        <Tooltip />
        <Legend />
        {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
        <Bar dataKey="StackHolder" stackId="a" barSize={20} fill="#8884d8" />
        <Bar dataKey="Investor" stackId="a" barSize={20} fill="#ff7300" />
        <Bar dataKey="amt" stackId="a" barSize={20} fill="#2a4ddf" />
        {/* <Line dataKey="Investor" stroke="#ff7300" /> */}
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default HorizontalStackChart;
