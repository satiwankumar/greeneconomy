import React from "react";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1", Investor: 300, StackHolder: 456 },
  { name: "2", Investor: -145, StackHolder: 230 },
  { name: "3", Investor: -100, StackHolder: 345 },
  { name: "4", Investor: -8, StackHolder: 450 },
  { name: "5", Investor: 100, StackHolder: 321 },
  { name: "6", Investor: 9, StackHolder: 235 },
  { name: "7", Investor: 53, StackHolder: 267 },
  { name: "8", Investor: 252, StackHolder: -378 },
  { name: "9", Investor: 79, StackHolder: -210 },
  { name: "10", Investor: 294, StackHolder: -23 },
  { name: "12", Investor: 43, StackHolder: 45 },
  { name: "13", Investor: -74, StackHolder: 90 },
  { name: "14", Investor: -71, StackHolder: 130 },
  { name: "15", Investor: -117, StackHolder: 11 },
  { name: "16", Investor: -186, StackHolder: 107 },
  { name: "17", Investor: -16, StackHolder: 926 },
  { name: "18", Investor: -125, StackHolder: 653 },
  { name: "19", Investor: 222, StackHolder: 366 },
];

function BrushBarchart(props) {
  return (
    <ResponsiveContainer width={300} height={300}>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
        <ReferenceLine y={0} stroke="#000" />
        {/* <Brush dataKey="name" height={30} stroke="#8884d8" /> */}
        <Bar dataKey="StackHolder" fill="#8884d8" />
        <Bar dataKey="Investor" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BrushBarchart;
