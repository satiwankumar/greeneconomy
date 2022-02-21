import { Col, Row } from "antd";
import React, { useContext, useState } from "react";
import { Grid, GridImage, GridItem } from "../../Utils/Grid";
import PieChart from "./Charts/PieChart/PieChart";
import DragItem from "../../Utils/DragItem";
import GridContext from "../../Utils/GridContext";
import "./TrackingDashboard.scss";
import BarChart from "./Charts/BarChart/BarChart";

function TrackingDashboard(props) {
  const { items, moveItem } = useContext(GridContext);
  const [charts, setCharts] = useState([
    { id: 1, chart: <PieChart /> },
    { id: 2, chart: <BarChart /> },
  ]);
  return (
    <div className="tracking-dashboard-main">
      <Grid>
        {items.map((item, index) => (
          <DragItem key={item?.id} id={item?.id} onMoveItem={moveItem}>
            <GridItem>
              <div className="chart-box">
                <div className="char-wrap">{item?.chart}</div>
              </div>
            </GridItem>
          </DragItem>
        ))}
      </Grid>
    </div>
  );
}

export default TrackingDashboard;
