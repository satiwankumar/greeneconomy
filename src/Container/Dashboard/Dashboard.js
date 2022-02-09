import {
  ArrowRightOutlined,
  CaretLeftFilled,
  CaretRightFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Divider,
  Input,
  message,
  Row,
  Select,
  Modal,
  Carousel,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useRef, useState } from "react";
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
import { createDashboard } from "../../Redux/Actions/DashboardActions";

import "./Dashboard.scss";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const { Option } = Select;
const { confirm } = Modal;

function Dashboard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showCreate, setShowCreate] = useState(true);
  const [dataType, setDataType] = useState({
    all: false,
    info: false,
    cons: false,
    innov: false,
    finance: false,
  });
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const [selectedGraphs, setSelectedGraphs] = useState([]);

  const [axisDetails, setAxisDetails] = useState({ x: "", y: "" });

  const [currentIndex, setCurrentIndex] = useState(0);
  const caroselRef = useRef(null);

  const onDataTypeSelect = (type, checked) => {
    if (type === "all") {
      checked
        ? setDataType({
            all: true,
            info: true,
            cons: true,
            innov: true,
            finance: true,
          })
        : setDataType({
            all: false,
            info: false,
            cons: false,
            innov: false,
            finance: false,
          });
    } else {
      if (
        Object.entries({ ...dataType, [type]: checked })
          ?.filter((item) => item[0] !== "all")
          ?.every((item) => item[1])
      ) {
        setDataType({
          all: true,
          info: true,
          cons: true,
          innov: true,
          finance: true,
        });
      } else {
        setDataType({ ...dataType, [type]: checked, all: false });
      }
    }
  };

  const onAddGraph = () => {
    if (!axisDetails?.x) {
      message.error("Please select valid axis");
      return;
    }
    if (
      selectedGraphs?.length &&
      selectedGraphs?.some((item) => !item?.chart)
    ) {
      message.error("Please select chart for below data");
      return;
    }
    setSelectedGraphs([...selectedGraphs, { ...axisDetails }]);
  };

  const onRemoveGraph = (index) => {
    setSelectedGraphs(
      [...selectedGraphs]?.filter((item, ind) => ind !== index)
    );
  };

  const onConfirmChart = (chart) => {
    confirm({
      title:
        "Confirm that you will like to proceed with this chart for the data set combination?",
      icon: null,
      okText: "PROCEED",
      cancelText: "CANCEL",
      onOk() {
        const graphs = [...selectedGraphs];
        let graph = { ...graphs[graphs?.length - 1] };
        graph = { ...graph, chart };
        graphs[graphs.length - 1] = graph;
        setSelectedGraphs(graphs);
        setAxisDetails({ x: "", y: "" });
      },
      className: "chart-confirm-modal",
      onCancel() {
        console.log("Cancel");
      },
      centered: true,
    });
  };

  const onCreateDashboard = () => {
    if (!name) {
      message.error("Please enter name of dashboard");
      return;
    }
    confirm({
      title:
        "You can add more data set to this chart type; would you like to add more or continue?",
      icon: null,
      okText: "CONTINUE",
      cancelText: "ADD MORE",
      onOk() {
        dispatch(
          createDashboard({ name, description: desc, charts: selectedGraphs })
        );
        setSelectedGraphs([]);
        setName("");
        setDesc("");
        setDataType({
          all: false,
          info: false,
          cons: false,
          innov: false,
          finance: false,
        });
        message.success("Dashboard created successfully");
        // navigate("/tracking-dashboard");
      },
      className: "chart-confirm-modal",
      onCancel() {},
      centered: true,
    });
  };

  const getSrcOfImg = (chart) => {
    switch (chart) {
      case "lineChart":
        return lineChart;
      case "lineChart1":
        return lineChart1;
      case "lineChart2":
        return lineChart2;
      case "lineChart3":
        return lineChart3;
      case "barChart":
        return barChart;
      case "barChart1":
        return barChart1;
      case "areaChart":
        return areaChart;
      case "stackChart":
        return stackChart;
      case "scatterChart":
        return scatterChart;
      case "pieChart":
        return pieChart;
      case "pieChart1":
        return pieChart1;
      case "ganttChart":
        return ganttChart;
      case "ganttChart1":
        return ganttChart1;
      default:
        return lineChart;
    }
  };

  return (
    <div className="dashboard-main">
      {!showCreate ? (
        <div className="create-dashboard-btn-wrap">
          <Button
            onClick={() => {
              setShowCreate(true);
            }}
            type="primary"
            size="large"
          >
            Create New Dashboard
          </Button>
        </div>
      ) : (
        <div className="create-dashboard-wrap">
          <h1 className="title-label">Create a New Dashboard</h1>
          <Divider />
          <Row className="row-wrap" gutter={12} align="middle">
            <Col span={6}>
              <label>Name Your Dashboard</label>
            </Col>
            <Col span={18}>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </Col>
          </Row>
          <Row className="row-wrap" gutter={12}>
            <Col span={6}>
              <label>Describe Dashboard</label>
            </Col>
            <Col span={18}>
              <TextArea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                rows={4}
              />
            </Col>
          </Row>
          <Divider />
          <Row align="middle" className="row-wrap" gutter={12}>
            <Col span={6}>
              <label>Select Data Type</label>
            </Col>
            <Col gutter={16} span={18}>
              <Row
                align="middle"
                className="checkboxes-wrap"
                justify="space-between"
              >
                <Checkbox
                  checked={dataType.all}
                  onChange={(e) => onDataTypeSelect("all", e.target.checked)}
                >
                  All
                </Checkbox>
                <Checkbox
                  checked={dataType.info}
                  onChange={(e) => onDataTypeSelect("info", e.target.checked)}
                >
                  Informational
                </Checkbox>
                <Checkbox
                  checked={dataType.cons}
                  onChange={(e) => onDataTypeSelect("cons", e.target.checked)}
                >
                  Conservation
                </Checkbox>
                <Checkbox
                  checked={dataType.innov}
                  onChange={(e) => onDataTypeSelect("innov", e.target.checked)}
                >
                  Innovation
                </Checkbox>
                <Checkbox
                  checked={dataType.finance}
                  onChange={(e) =>
                    onDataTypeSelect("finance", e.target.checked)
                  }
                >
                  Financial
                </Checkbox>
              </Row>
            </Col>
          </Row>
          <Divider />
          {Object.values(dataType)?.some((item) => item) && (
            <Row className="row-wrap" gutter={12}>
              <Col span={4}>
                <label>Combine Data Set</label>
              </Col>
              <Col span={8}>
                <Row gutter={12}>
                  <Col span={5}>
                    <div className="axis-label-btn">X-Axis</div>
                  </Col>
                  <Col span={16}>
                    <Select
                      value={axisDetails?.x}
                      onChange={(value) =>
                        setAxisDetails({ ...axisDetails, x: value })
                      }
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
                  </Col>
                </Row>
              </Col>
              <Col span={8}>
                <Row gutter={12}>
                  <Col span={5}>
                    <div className="axis-label-btn">Y-Axis</div>
                  </Col>
                  <Col span={16}>
                    <Select
                      value={axisDetails?.y}
                      onChange={(value) =>
                        setAxisDetails({ ...axisDetails, y: value })
                      }
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
                  </Col>
                </Row>
              </Col>
              <Col span={2}>
                <Row gutter={12}>
                  <div className="add-btn" onClick={() => onAddGraph()}>
                    +
                  </div>
                </Row>
              </Col>
            </Row>
          )}
          <Row className="row-wrap" gutter={12}>
            <Col span={16}>
              {selectedGraphs?.map((graph, index) => {
                return (
                  <Row>
                    <div className="single-grap-axis-data">
                      <span>{graph?.x}</span> <ArrowRightOutlined />{" "}
                      <span>{graph?.y}</span>
                    </div>
                    <div
                      className="remove-btn"
                      onClick={() => onRemoveGraph(index)}
                    >
                      -
                    </div>
                  </Row>
                );
              })}
              <Row className="graphs-icons-wrap" gutter={[12, 24]}>
                {selectedGraphs?.map((graph, index) => {
                  return graph?.chart ? (
                    <Col span={5}>
                      <div
                        style={{
                          width: "90%",
                          padding: "10px 10px",
                          background: "#f4f4ff",
                          borderRadius: 6,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={getSrcOfImg(graph?.chart)}
                          alt=""
                          width={"90%"}
                          height={100}
                        />
                      </div>
                    </Col>
                  ) : null;
                })}
              </Row>
              {selectedGraphs?.length > 0 &&
                selectedGraphs?.every((graph) => graph?.chart) && (
                  <Row
                    className="create-btn-wrap"
                    align="middle"
                    justify="center"
                  >
                    <Col span={24}>
                      <span className="instruction">
                        You can click on your selected chart to combine two
                        charts into one
                      </span>
                    </Col>
                    <Col>
                      <Button
                        onClick={() => onCreateDashboard()}
                        type="primary"
                        danger
                      >
                        I AM DONE. CREATE DASHBOARD
                      </Button>
                    </Col>
                  </Row>
                )}
            </Col>
            {selectedGraphs?.length > 0 && (
              <Col span={7}>
                <span className="choose-graph-label">
                  Choose from available chart for this data combination
                </span>
                {currentIndex !== 0 && (
                  <div className="left-arrow-carosel">
                    <CaretLeftFilled
                      onClick={() => caroselRef.current.prev()}
                    />
                  </div>
                )}
                {currentIndex !== 2 && (
                  <div className="right-arrow-carosel">
                    <CaretRightFilled
                      onClick={() => caroselRef.current.next()}
                    />
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
                      <Col span={12}>
                        <div
                          style={{
                            width: "95%",
                            padding: "10px 10px",
                            background: "#f4f4ff",
                            borderRadius: 6,
                          }}
                        >
                          <img
                            onClick={() => onConfirmChart("lineChart")}
                            src={lineChart}
                            alt=""
                            width={"90%"}
                            height={120}
                          />
                        </div>
                      </Col>
                      <Col span={12}>
                        <div
                          style={{
                            width: "95%",
                            padding: "10px 10px",
                            background: "#f4f4ff",
                            borderRadius: 6,
                          }}
                        >
                          <img
                            onClick={() => onConfirmChart("lineChart1")}
                            src={lineChart1}
                            alt=""
                            width={"90%"}
                            height={120}
                          />
                        </div>
                      </Col>
                      <Col span={12}>
                        <div
                          style={{
                            width: "95%",
                            padding: "10px 10px",
                            background: "#f4f4ff",
                            borderRadius: 6,
                          }}
                        >
                          <img
                            onClick={() => onConfirmChart("barChart")}
                            src={barChart}
                            alt=""
                            width={"90%"}
                            height={120}
                          />
                        </div>
                      </Col>
                      <Col span={12}>
                        <div
                          style={{
                            width: "95%",
                            padding: "10px 10px",
                            background: "#f4f4ff",
                            borderRadius: 6,
                          }}
                        >
                          <img
                            onClick={() => onConfirmChart("stackChart")}
                            src={stackChart}
                            alt=""
                            width={"90%"}
                            height={120}
                          />
                        </div>
                      </Col>
                      <Col span={12}>
                        <div
                          style={{
                            width: "95%",
                            padding: "10px 10px",
                            background: "#f4f4ff",
                            borderRadius: 6,
                          }}
                        >
                          <img
                            onClick={() => onConfirmChart("scatterChart")}
                            src={scatterChart}
                            alt=""
                            width={"90%"}
                            height={120}
                          />
                        </div>
                      </Col>
                      <Col span={12}>
                        <div
                          style={{
                            width: "95%",
                            padding: "10px 10px",
                            background: "#f4f4ff",
                            borderRadius: 6,
                          }}
                        >
                          <img
                            onClick={() => onConfirmChart("pieChart")}
                            src={pieChart}
                            alt=""
                            width={"90%"}
                            height={120}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <Row className="graphs-icons-wrap" gutter={[16, 24]}>
                      <Col span={12}>
                        <div
                          style={{
                            width: "95%",
                            padding: "10px 10px",
                            background: "#f4f4ff",
                            borderRadius: 6,
                          }}
                        >
                          <img
                            onClick={() => onConfirmChart("barChart1")}
                            src={barChart1}
                            alt=""
                            width={"90%"}
                            height={120}
                          />
                        </div>
                      </Col>
                      <Col span={12}>
                        <div
                          style={{
                            width: "95%",
                            padding: "10px 10px",
                            background: "#f4f4ff",
                            borderRadius: 6,
                          }}
                        >
                          <img
                            onClick={() => onConfirmChart("ganttChart")}
                            src={ganttChart}
                            alt=""
                            width={"90%"}
                            height={120}
                          />
                        </div>
                      </Col>
                      <Col span={12}>
                        <div
                          style={{
                            width: "95%",
                            padding: "10px 10px",
                            background: "#f4f4ff",
                            borderRadius: 6,
                          }}
                        >
                          <img
                            onClick={() => onConfirmChart("areaChart")}
                            src={areaChart}
                            alt=""
                            width={"90%"}
                            height={120}
                          />
                        </div>
                      </Col>
                      <Col span={12}>
                        <div
                          style={{
                            width: "95%",
                            padding: "10px 10px",
                            background: "#f4f4ff",
                            borderRadius: 6,
                          }}
                        >
                          <img
                            onClick={() => onConfirmChart("lineChart2")}
                            src={lineChart2}
                            alt=""
                            width={"90%"}
                            height={120}
                          />
                        </div>
                      </Col>
                      <Col span={12}>
                        <div
                          style={{
                            width: "95%",
                            padding: "10px 10px",
                            background: "#f4f4ff",
                            borderRadius: 6,
                          }}
                        >
                          <img
                            onClick={() => onConfirmChart("pieChart1")}
                            src={pieChart1}
                            alt=""
                            width={"90%"}
                            height={120}
                          />
                        </div>
                      </Col>
                      <Col span={12}>
                        <div
                          style={{
                            width: "95%",
                            padding: "10px 10px",
                            background: "#f4f4ff",
                            borderRadius: 6,
                          }}
                        >
                          <img
                            onClick={() => onConfirmChart("ganttChart1")}
                            src={ganttChart1}
                            alt=""
                            width={"90%"}
                            height={120}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <Row className="graphs-icons-wrap" gutter={[16, 24]}>
                      <Col span={12}>
                        <div
                          style={{
                            width: "95%",
                            padding: "10px 10px",
                            background: "#f4f4ff",
                            borderRadius: 6,
                          }}
                        >
                          <img
                            onClick={() => onConfirmChart("lineChart3")}
                            src={lineChart3}
                            alt=""
                            width={"90%"}
                            height={120}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Carousel>
              </Col>
            )}
          </Row>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
