import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Informational", value: 400 },
  { name: "Innovation", value: 300 },
  { name: "Conservation", value: 300 },
  { name: "Financial", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function PieAnglePaddingChart(props) {
  return (
    <ResponsiveContainer width={200} height={330}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          innerRadius={50}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieAnglePaddingChart;
