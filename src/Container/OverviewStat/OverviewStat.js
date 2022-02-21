import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  BarChart,
  Bar,
  LabelList,
  Text,
  Legend,
  Label,
} from "recharts";
import "./OverviewStat.scss";
import lagosMap from "../../Assets/Images/lagos_map.png";

const data = [
  { name: "Informational", value: 400 },
  { name: "Innovation", value: 140 },
  { name: "Conservation", value: 450 },
  { name: "Financial", value: 570 },
];

const barData = [
  {
    name: "Alimosho",
    pv: 4,
  },
  {
    name: "Ajeromi Ifelodun",
    pv: 11,
  },
  {
    name: "Kosofe",
    pv: 4,
  },
  {
    name: "Mushin",
    pv: 10,
  },
  {
    name: "Oshodi-Isolo",
    pv: 6,
  },
  {
    name: "Oio",
    pv: 5,
  },
  {
    name: "Ikorodu",
    pv: 4,
  },
  {
    name: "Surulere",
    pv: 8,
  },
  {
    name: "Agege",
    pv: 6,
  },
  {
    name: "Ifako-liaiye",
    pv: 5,
  },
  {
    name: "Somolu",
    pv: 4,
  },
  {
    name: "Amuwo-Odofin",
    pv: 6,
  },
  {
    name: "Lagos Mainland",
    pv: 7,
  },
  {
    name: "Ikeja",
    pv: 9,
  },
  {
    name: "Eti-Osa",
    pv: 10,
  },
  {
    name: "Badagry",
    pv: 6,
  },
  {
    name: "Apapa",
    pv: 8,
  },
  {
    name: "Lagos Island",
    pv: 4,
  },
  {
    name: "Epe",
    pv: 5,
  },
  {
    name: "Ibeju-Lekki",
    pv: 7,
  },
];


const COLORS = ["#008ffb", "#ff4560", "#feb019", "#00e396"];

function OverviewStat(props) {
  const [showLabel, setShowLabel] = useState(false);
  return (
    <div className="overview-stat-main">
      <Row gutter={[0, 10]} justify="space-between">
        <Col span={{lg:7, xs: 24}}>
          <div className="pie-chart-wrap">
          <PieChart width={280} height={300}>
            <Pie
              isAnimationActive={false}
              data={data}
              innerRadius={75}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={1}
              dataKey="value"
            >
              <Label
                value="Circular Data Points"
                fontSize={"14"}
                fontWeight={"bold"}
                position="centerTop"
              />
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
          </div>
        </Col>
        <Col span={{lg:16, xs: 24}}>
          <div className="line-chart-wrap">
            <div className="inner-wrap">
              <div className="title-wrap w-100 d-flex justify-content-between align-center">
                <span>Circular Adoption by LGA</span>
                {showLabel ? (
                  <EyeInvisibleOutlined
                    onClick={() => setShowLabel(!showLabel)}
                  />
                ) : (
                  <EyeOutlined onClick={() => setShowLabel(!showLabel)} />
                )}
              </div>
              <div style={{ display: "flex", marginTop: 20 }}>
                {barData?.map((item) => (
                  <div
                    style={{
                      display: "flex",
                      marginLeft: 12,
                      alignItems: "flex-end",
                    }}
                  >
                    <span
                      style={{
                        textOrientation: "sideways",
                        writingMode: "vertical-lr",
                        transform: "rotate(-180deg)",
                        color: "#fff",
                        lineHeight: 1.2,
                        opacity: showLabel ? 1 : 0,
                      }}
                    >
                      {item?.name}
                    </span>
                    <div
                      style={{
                        height: 120 * (item?.pv / 10),
                        width: 4,
                        background: "#fff",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="line-chart-legend-wrap">
              <div className="line-chart1">
                <h2>239</h2>
                <span>Total Investor</span>
              </div>
              <div className="line-chart2">
                <h2>134</h2>
                <span>Stakeholders</span>
              </div>
              <div className="line-chart3">
                <h2>239</h2>
                <span>Green Project</span>
              </div>
              <div className="line-chart4">
                <h2>32</h2>
                <span>Funding</span>
              </div>
            </div>
          </div>
        </Col>
        <Col span={15}>
          <div className="lagos-map-wrap">
            <p className="lagos-map-title">Lagos Sentiment Map</p>
            <div className="lagos-map-wrap-image">
              <img src={lagosMap} alt="" height={"100%"} width={"100%"} />
            </div>
          </div>
        </Col>
        <Col span={8} offset={1}>
          <div className="lagos-green-wrap">
            <p className="lagos-green-title">Lagos Green Sentiment</p>
            <div className="positive">
              <span className="positive-1">Positive</span>
              <span className="positive-2">32%</span>
            </div>
            <div className="negative">
              <span className="negative-1">Negative</span>
              <span className="negative-2">68%</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default OverviewStat;
