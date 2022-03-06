import { Carousel, Divider, Drawer, Select, Row, Col } from "antd";
import React, { useRef, useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import lineChart from "../../Assets/Images/line-chart.png";
import lineChart1 from "../../Assets/Images/line-chart (1).png";
import lineChart2 from "../../Assets/Images/line-chart (2).png";
import lineChart3 from "../../Assets/Images/bar-chart (3).png";
import barChart from "../../Assets/Images/bar-chart.png";
import barChart1 from "../../Assets/Images/bar-chart (1).png";
import areaChart from "../../Assets/Images/area-chart.png";
import stackChart from "../../Assets/Images/stacked.png";
import scatterChart from "../../Assets/Images/scatter-plot.png";
import pieChart from "../../Assets/Images/pie-chart.png";
import pieChart1 from "../../Assets/Images/pie-chart (1).png";
import ganttChart from "../../Assets/Images/gantt-chart.png";
import ganttChart1 from "../../Assets/Images/gantt-chart (1).png";
import "./DataSidePanel.scss";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";
import GridContext from "../../Utils/GridContext";

const { Option } = Select;

function DataSidePanel(props) {
  const { showPanel, setShowPanel } = props;
  const { items, moveItem } = useContext(GridContext);
  const [tracking, setTrackingdashboard] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location?.pathname === "/tracking-dashboard") {
      setTrackingdashboard(true);
    }
  }, [location]);

  const [on, setOn] = useState(false);
  const caroselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedGraphs, setSelectedGraphs] = useState([]);

  console.log("items", items);

  let routes = {
    lineChart: lineChart,
    lineChart1: lineChart1,
    lineChart2: lineChart2,
    lineChart3: lineChart3,
    barChart: barChart,
    barChart1: barChart1,
    areaChart: areaChart,
    areaChart: areaChart,
    scatterChart: scatterChart,
    pieChart: pieChart,
    pieChart1: pieChart1,
    ganttChart: ganttChart,
    ganttChart1: ganttChart1,
  };

  return (
    <Drawer
      title="Select Chart to Take Action"
      placement={"right"}
      closable={true}
      onClose={() => setShowPanel(false)}
      visible={showPanel}
      width={470}
    >
      <div className="side-panel-wraper">
        {/* <div className="graphs-wraper">
          <div className="single-graph">All</div>
          <div className="single-graph">
            <img src={areaChart} height={"100%"} width={"100%"} />
          </div>
          <div className="single-graph">
            <img src={stackChart} height={"100%"} width={"100%"} />
          </div>
          <div className="single-graph">
            <img src={barChart} height={"100%"} width={"100%"} />
          </div>
          <div className="single-graph">
            <img src={lineChart3} height={"100%"} width={"100%"} />
          </div>
          <div className="single-graph">
            <img src={barChart1} height={"100%"} width={"100%"} />
          </div>
        </div> */}
        <Row>
          <Col span={24}>
            {currentIndex !== 0 && (
              <div className="left-arrow-carosel">
                <CaretLeftFilled onClick={() => caroselRef.current.prev()} />
              </div>
            )}
            {currentIndex !== 2 && (
              <div className="right-arrow-carosel">
                <CaretRightFilled onClick={() => caroselRef.current.next()} />
              </div>
            )}

            <Carousel
              ref={caroselRef}
              afterChange={(index) => {
                setCurrentIndex(index);
              }}
            >
              <div>
                <Row className="graphs-icons-wrap" gutter={[16, 24]}>
                  {!tracking ? (
                    <Col span={8}>
                      <div
                        className="single-graph"
                        onClick={() =>
                          selectedGraphs?.length === 7
                            ? setSelectedGraphs([])
                            : setSelectedGraphs([
                                "lineChart",
                                "barchart",
                                "areaChart",
                                "scatterChart",
                                "stackChart",
                                "pieChart",
                                "ganttChart",
                              ])
                        }
                      >
                        All
                      </div>
                    </Col>
                  ) : (
                  ""
                  )}
                  {
                    tracking
                      ? items.length > 0 &&
                        items.map((item) => (
                          <Col span={8}>
                            <div
                              onClick={() => {
                                if (selectedGraphs?.includes(item.key)) {
                                  setSelectedGraphs(
                                    selectedGraphs?.filter(
                                      (item) => item !== item.key
                                    )
                                  );
                                } else {
                                  setSelectedGraphs(
                                    selectedGraphs?.concat(item.key)
                                  );
                                }
                              }}
                              style={{
                                width: "95%",
                                padding: "10px 10px",
                                background: "#f4f4ff",
                                borderRadius: 6,
                                cursor: "pointer",
                                ...(selectedGraphs?.includes(item.key) && {
                                  border: "4px solid #3e4095",
                                }),
                              }}
                            >
                              <img
                                src={routes[item.key]}
                                alt=""
                                width={"90%"}
                                height={100}
                              />
                            </div>
                          </Col>
                        
                        ))
                        
                      : 


<>
                      <Col span={8}>
                      <div
                        onClick={() => {
                          if (selectedGraphs?.includes("LINE CHART")) {
                            setSelectedGraphs(
                              selectedGraphs?.filter(
                                (item) => item !== "LINE CHART"
                              )
                            );
                          } else {
                            setSelectedGraphs(
                              selectedGraphs?.concat("LINE CHART")
                            );
                          }
                        }}
                        style={{
                          width: "95%",
                          padding: "10px 10px",
                          background: "#f4f4ff",
                          borderRadius: 6,
                          cursor: "pointer",
                          ...(selectedGraphs?.includes("LINE CHART") && {
                            border: "4px solid #3e4095",
                          }),
                        }}
                      >
                        <img src={lineChart} alt="" width={"90%"} height={100} />
                      </div>
                    </Col>
  
                    <Col span={8}>
                      <div
                        onClick={() => {
                          if (selectedGraphs?.includes("AREA CHART")) {
                            setSelectedGraphs(
                              selectedGraphs?.filter(
                                (item) => item !== "AREA CHART"
                              )
                            );
                          } else {
                            setSelectedGraphs(
                              selectedGraphs?.concat("AREA CHART")
                            );
                          }
                        }}
                        style={{
                          width: "95%",
                          padding: "10px 10px",
                          background: "#f4f4ff",
                          borderRadius: 6,
                          cursor: "pointer",
                          ...(selectedGraphs?.includes("AREA CHART") && {
                            border: "4px solid #3e4095",
                          }),
                        }}
                      >
                        <img src={lineChart1} alt="" width={"90%"} height={100} />
                      </div>
                    </Col>
                    <Col span={8}>
                      <div
                        onClick={() => {
                          if (selectedGraphs?.includes("BAR CHART")) {
                            setSelectedGraphs(
                              selectedGraphs?.filter(
                                (item) => item !== "BAR CHART"
                              )
                            );
                          } else {
                            setSelectedGraphs(
                              selectedGraphs?.concat("BAR CHART")
                            );
                          }
                        }}
                        style={{
                          width: "95%",
                          padding: "10px 10px",
                          background: "#f4f4ff",
                          borderRadius: 6,
                          cursor: "pointer",
                          ...(selectedGraphs?.includes("BAR CHART") && {
                            border: "4px solid #3e4095",
                          }),
                        }}
                      >
                        <img src={barChart} alt="" width={"90%"} height={100} />
                      </div>
                    </Col>
                    <Col span={8}>
                      <div
                        onClick={() => {
                          if (selectedGraphs?.includes("STACK CHART")) {
                            setSelectedGraphs(
                              selectedGraphs?.filter(
                                (item) => item !== "STACK CHART"
                              )
                            );
                          } else {
                            setSelectedGraphs(
                              selectedGraphs?.concat("STACK CHART")
                            );
                          }
                        }}
                        style={{
                          width: "95%",
                          padding: "10px 10px",
                          background: "#f4f4ff",
                          borderRadius: 6,
                          cursor: "pointer",
                          ...(selectedGraphs?.includes("STACK CHART") && {
                            border: "4px solid #3e4095",
                          }),
                        }}
                      >
                        <img src={stackChart} alt="" width={"90%"} height={100} />
                      </div>
                    </Col>
                    <Col span={8}>
                      <div
                        onClick={() => {
                          if (selectedGraphs?.includes("SCATTER CHART")) {
                            setSelectedGraphs(
                              selectedGraphs?.filter(
                                (item) => item !== "SCATTER CHART"
                              )
                            );
                          } else {
                            setSelectedGraphs(
                              selectedGraphs?.concat("SCATTER CHART")
                            );
                          }
                        }}
                        style={{
                          width: "95%",
                          padding: "10px 10px",
                          background: "#f4f4ff",
                          borderRadius: 6,
                          cursor: "pointer",
                          ...(selectedGraphs?.includes("SCATTER CHART") && {
                            border: "4px solid #3e4095",
                          }),
                        }}
                      >
                        <img
                          src={scatterChart}
                          alt=""
                          width={"90%"}
                          height={100}
                        />
                      </div>
                    </Col>
                    </>

}


                    
                  </Row>
                </div>
                <div>
                  <Row className="graphs-icons-wrap" gutter={[16, 24]}>
                    <Col span={8}>
                      <div
                        onClick={() => {
                          if (selectedGraphs?.includes("PIE CHART")) {
                            setSelectedGraphs(
                              selectedGraphs?.filter(
                                (item) => item !== "PIE CHART"
                              )
                            );
                          } else {
                            setSelectedGraphs(
                              selectedGraphs?.concat("PIE CHART")
                            );
                          }
                        }}
                        style={{
                          width: "95%",
                          padding: "10px 10px",
                          background: "#f4f4ff",
                          borderRadius: 6,
                          cursor: "pointer",
                          ...(selectedGraphs?.includes("PIE CHART") && {
                            border: "4px solid #3e4095",
                          }),
                        }}
                      >
                        <img src={pieChart} alt="" width={"90%"} height={100} />
                      </div>
                    </Col>
                    <Col span={8}>
                      <div
                        onClick={() => {
                          if (selectedGraphs?.includes("BAR CHART")) {
                            setSelectedGraphs(
                              selectedGraphs?.filter(
                                (item) => item !== "BAR CHART"
                              )
                            );
                          } else {
                            setSelectedGraphs(
                              selectedGraphs?.concat("BAR CHART")
                            );
                          }
                        }}
                        style={{
                          width: "95%",
                          padding: "10px 10px",
                          background: "#f4f4ff",
                          borderRadius: 6,
                          cursor: "pointer",
                          ...(selectedGraphs?.includes("BAR CHART") && {
                            border: "4px solid #3e4095",
                          }),
                        }}
                      >
                        <img src={barChart1} alt="" width={"90%"} height={100} />
                      </div>
                    </Col>
                    <Col span={8}>
                      <div
                        onClick={() => {
                          if (selectedGraphs?.includes("GANTT CHART")) {
                            setSelectedGraphs(
                              selectedGraphs?.filter(
                                (item) => item !== "GANTT CHART"
                              )
                            );
                          } else {
                            setSelectedGraphs(
                              selectedGraphs?.concat("GANTT CHART")
                            );
                          }
                        }}
                        style={{
                          width: "95%",
                          padding: "10px 10px",
                          background: "#f4f4ff",
                          borderRadius: 6,
                          cursor: "pointer",
                          ...(selectedGraphs?.includes("GANTT CHART") && {
                            border: "4px solid #3e4095",
                          }),
                        }}
                      >
                        <img src={ganttChart} alt="" width={"90%"} height={100} />
                      </div>
                    </Col>
                    <Col span={8}>
                      <div
                        onClick={() => {
                          if (selectedGraphs?.includes("AREA CHART")) {
                            setSelectedGraphs(
                              selectedGraphs?.filter(
                                (item) => item !== "AREA CHART"
                              )
                            );
                          } else {
                            setSelectedGraphs(
                              selectedGraphs?.concat("AREA CHART")
                            );
                          }
                        }}
                        style={{
                          width: "95%",
                          padding: "10px 10px",
                          background: "#f4f4ff",
                          borderRadius: 6,
                          cursor: "pointer",
                          ...(selectedGraphs?.includes("AREA CHART") && {
                            border: "4px solid #3e4095",
                          }),
                        }}
                      >
                        <img src={areaChart} alt="" width={"90%"} height={100} />
                      </div>
                    </Col>
                    <Col span={8}>
                      <div
                        onClick={() => {
                          if (selectedGraphs?.includes("LINE CHART")) {
                            setSelectedGraphs(
                              selectedGraphs?.filter(
                                (item) => item !== "LINE CHART"
                              )
                            );
                          } else {
                            setSelectedGraphs(
                              selectedGraphs?.concat("LINE CHART")
                            );
                          }
                        }}
                        style={{
                          width: "95%",
                          padding: "10px 10px",
                          background: "#f4f4ff",
                          borderRadius: 6,
                          cursor: "pointer",
                          ...(selectedGraphs?.includes("LINE CHART") && {
                            border: "4px solid #3e4095",
                          }),
                        }}
                      >
                        <img src={lineChart2} alt="" width={"90%"} height={100} />
                      </div>
                    </Col>
                    <Col span={8}>
                      <div
                        onClick={() => {
                          if (selectedGraphs?.includes("PIE CHART")) {
                            setSelectedGraphs(
                              selectedGraphs?.filter(
                                (item) => item !== "PIE CHART"
                              )
                            );
                          } else {
                            setSelectedGraphs(
                              selectedGraphs?.concat("PIE CHART")
                            );
                          }
                        }}
                        style={{
                          width: "95%",
                          padding: "10px 10px",
                          background: "#f4f4ff",
                          borderRadius: 6,
                          cursor: "pointer",
                          ...(selectedGraphs?.includes("PIE CHART") && {
                            border: "4px solid #3e4095",
                          }),
                        }}
                      >
                        <img src={pieChart1} alt="" width={"90%"} height={100} />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row className="graphs-icons-wrap" gutter={[16, 24]}>
                    <Col span={8}>
                      <div
                        onClick={() => {
                          if (selectedGraphs?.includes("GANTT CHART")) {
                            setSelectedGraphs(
                              selectedGraphs?.filter(
                                (item) => item !== "GANTT CHART"
                              )
                            );
                          } else {
                            setSelectedGraphs(
                              selectedGraphs?.concat("GANTT CHART")
                            );
                          }
                        }}
                        style={{
                          width: "95%",
                          padding: "10px 10px",
                          background: "#f4f4ff",
                          borderRadius: 6,
                          cursor: "pointer",
                          ...(selectedGraphs?.includes("GANTT CHART") && {
                            border: "4px solid #3e4095",
                          }),
                        }}
                      >
                        <img
                          src={ganttChart1}
                          alt=""
                          width={"90%"}
                          height={100}
                        />
                      </div>
                    </Col>
                    <Col span={8}>
                      <div
                        onClick={() => {
                          if (selectedGraphs?.includes("LINE CHART")) {
                            setSelectedGraphs(
                              selectedGraphs?.filter(
                                (item) => item !== "LINE CHART"
                              )
                            );
                          } else {
                            setSelectedGraphs(
                              selectedGraphs?.concat("LINE CHART")
                            );
                          }
                        }}
                        style={{
                          width: "95%",
                          padding: "10px 10px",
                          background: "#f4f4ff",
                          borderRadius: 6,
                          cursor: "pointer",
                          ...(selectedGraphs?.includes("LINE CHART") && {
                            border: "4px solid #3e4095",
                          }),
                        }}
                      >
                        <img src={lineChart3} alt="" width={"90%"} height={100} />
                      </div>
                    </Col>















                    // lineChart
                  }
                </Row>
              </div>
            </Carousel>
          </Col>
        </Row>

        <Divider className="divider" />
        <div className="short">
          <span className="short-data">Short data</span>
          {/* <select>
            <option>Select Filter</option>
          </select> */}
          <Select
            placeholder="Select Format"
            showArrow
            style={{ width: "50%" }}
          >
            <Option value={"Estimated CO2 Emission"}>
              Estimated CO2 Emission
            </Option>
            <Option value={"Real Income Per Unit of CO2 Emmitted"}>
              Real Income Per Unit of CO2 Emmitted
            </Option>
            <Option value={"Financial Value Per Unit of Emitted Co2"}>
              Financial Value Per Unit of Emitted Co2
            </Option>
            <Option value={"Total Primary Energy Supply Unit"}>
              Total Primary Energy Supply Unit
            </Option>
          </Select>
        </div>
        <Divider className="divider" />
        <div className="short">
          <span className="short-data">Export data</span>
          <Select
            placeholder="Select Format"
            showArrow
            style={{ width: "50%" }}
          >
            <Option value={"Estimated CO2 Emission"}>
              Estimated CO2 Emission
            </Option>
            <Option value={"Real Income Per Unit of CO2 Emmitted"}>
              Real Income Per Unit of CO2 Emmitted
            </Option>
            <Option value={"Financial Value Per Unit of Emitted Co2"}>
              Financial Value Per Unit of Emitted Co2
            </Option>
            <Option value={"Total Primary Energy Supply Unit"}>
              Total Primary Energy Supply Unit
            </Option>
          </Select>
        </div>
        <Divider className="divider" />
        <div className="view-table">
          <span>View as Table</span>
          <div className="button">
            <div
              className={`${!on && "active-switch"} off`}
              onClick={() => setOn(false)}
            >
              OFF
            </div>
            <div
              className={`${on && "active-switch"} on`}
              onClick={() => setOn(true)}
            >
              ON
            </div>
          </div>
        </div>
        <Divider className="divider" />
        {selectedGraphs?.length > 0 && (
          <>
            <span className="trend-action">Trend & Action Schedule</span>
            <div className="schedule">
              {selectedGraphs?.map((graph) =>
                [
                  "lineChart",
                  "barchart",
                  "areaChart",
                  "scatterChart",
                ]?.includes(graph) ? (
                  <div className="line">
                    <div className="line-1">
                      <span> {graph}</span>
                      <p>X</p>
                      <input type={"number"} className="color-code" />
                      <input type={"number"} className="color-1" />
                    </div>
                    <div className="line-2">
                      <p>Y</p>
                      <input type={"number"} className="color-code" />
                      <input type={"number"} className="color-1" />
                    </div>
                  </div>
                ) : (
                  <div className="pie">
                    <div className="pie-1">
                      <span>{graph}</span>
                      <p>1</p>
                      <input type={"number"} className="color-code" />
                      <input type={"number"} className="color-1" />
                    </div>
                    <div className="pie-2">
                      <p>2</p>
                      <input type={"number"} className="color-code" />
                      <input type={"number"} className="color-1" />
                    </div>
                    <div className="pie-3">
                      <p>3</p>
                      <input type={"number"} className="color-code" />
                      <input type={"number"} className="color-1" />
                    </div>
                    <div className="pie-3">
                      <p>4</p>
                      <input type={"number"} className="color-code" />
                      <input type={"number"} className="color-1" />
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="apply-btn" onClick={() => setShowPanel(false)}>
              APPLY
            </div>
          </>
        )}
      </div>
      {/* <Divider /> */}
    </Drawer>
  );
}

export default DataSidePanel;

// // {

// }
