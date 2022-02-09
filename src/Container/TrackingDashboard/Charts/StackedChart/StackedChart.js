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
import "./StackedChart.scss";

const data = [
  {
    name: "Page A",
    Investor: 345,
    StackHolder: 798,
    amt: 1400,
  },
  {
    name: "Page B",
    Investor: 846,
    StackHolder: 1045,
    amt: 1506,
  },
  {
    name: "Page C",
    Investor: 1467,
    StackHolder: 653,
    amt: 989,
  },
  {
    name: "Page D",
    Investor: 2548,
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

function StackedChart(props) {
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
        <XAxis hide type="number" />
        <YAxis hide dataKey="name" type="category" scale="band" />
        <Tooltip />
        <Legend />
        <Bar dataKey="StackHolder" stackId="a" barSize={20} fill="#ff4560" />
        <Bar dataKey="Investor" stackId="a" barSize={20} fill="#008ffb" />
        <Bar dataKey="amt" stackId="a" barSize={20} fill="#00e396" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default StackedChart;
