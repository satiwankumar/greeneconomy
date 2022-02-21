import React from "react";
import {
  ScatterChart as Scatterchart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { x: 60, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 90, y: 300, z: 370 },
  { x: 140, y: 140, z: 40 },
  { x: 150, y: 350, z: 300 },
  { x: 110, y: 280, z: 200 },
  { x: 90, y: 300, z: 70 },
  { x: 130, y: 270, z: 300 },
  { x: 150, y: 70, z: 300 },
  { x: 40, y: 280, z: 200 },
];

function ScatterChart(props) {
  return (
    <ResponsiveContainer width={230} height={300}>
      <Scatterchart
        width={400}
        height={400}
        margin={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="A school" data={data} fill="#8884d8" />
      </Scatterchart>
    </ResponsiveContainer>
  );
}

export default ScatterChart;
