import React, { PureComponent } from "react";
import {
  LineChart as Linechart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./LineChart.scss";

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

function LineChart(props) {
  return (
    <ResponsiveContainer width={250} height={300}>
      <Linechart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="StackHolder"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Investor" stroke="#82ca9d" />
      </Linechart>
    </ResponsiveContainer>
  );
}

export default LineChart;
