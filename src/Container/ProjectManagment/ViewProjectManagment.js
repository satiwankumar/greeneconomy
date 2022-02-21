import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Input,
  Select,
  Button,
  Modal,
  Dropdown,
  Menu,
  Checkbox,
} from "antd";

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
import Table from "../../Component/Tables/Table";
import { CaretDownOutlined } from "@ant-design/icons";

export const ViewProjectManagment = (props) => {
  const headings = [
    { title: "SN", dataIndex: "sn", key: "sn" },

    { title: "Date Created", dataIndex: "date", key: "date" },
    { title: "Prject Name", dataIndex: "projectName", key: "projectName" },
    { title: "Industry", dataIndex: "Industry", key: "Industry" },
    { title: "LGA", dataIndex: "LGA", key: "LGA" },
  ];
  const data = [];

  for (let i = 0; i <= 10; i++) {
    data.push(
      {
        key: i + 1,
        sn: i + 1,
        date: "1/7/2022",
        projectName: "Shomolu Cleanup Project",
        Industry: "HealthCare",
        LGA: "Shomolu",
        editable: false,
      },

      {
        key: i + 2,
        sn: i + 2,
        date: "1/7/2022",
        projectName: "John",
        Industry: "Govenment",
        LGA: "lkeja",
        editable: false,
      }
    );
  }
  // style={{ paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#e6e7e8', color: '#606062', width: '320px', borderRadius: 5 }}
  const { Option } = Select;
  const { TextArea } = Input;
  function handleChange(value) {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  }

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModal1 = () => {
    setIsModalVisible1(true);
  };

  const handleOk1 = () => {
    setIsModalVisible1(false);
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a onClick={() => showModal()}>Manage</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a onClick={() => showModal1()}>Assign</a>
      </Menu.Item>
    </Menu>
  );

  const metaData = [
        {
            "title":"Title",text:"Shomolu Cleanup Project"
        },
        {
            "title":"Created/Due",text:"12/17/2022 / 12/25/2022"
        },
        {
            "title":"Indstry",text:"Shomolu Cleanup Project"
        },
     
        
  ]

  const data1 = [
    { name: "Informational", value: 400 },
    { name: "Innovation", value: 140 },
    { name: "Conservation", value: 450 },
    { name: "Financial", value: 570 },
  ];
  
  const COLORS = ["#008ffb", "#ff4560", "#feb019", "#00e396"];
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <div>
          <h1 className="heading">Manage Circular Projects</h1>
        </div>
      </div>

      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col span={8}>
        <PieChart width={280} height={300}>
              <Pie
                isAnimationActive={false}
                data={data1}
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
        </Col>
        <Col span={16}>
          {metaData?.map((item) => (
            <Row>
              <Col span={12}>
                <h2>{item?.title}</h2>
                <p>{item?.text}</p>
              </Col>
              <Col span={12}>
                <h2>{item?.title}</h2>
                <p>{item?.text}</p>
              </Col>
             
            </Row>
          ))}
        </Col>
      </Row>

      <Table
        headings={headings}
        ADDButton={true} 
        link={'/project-managment'}
        data={data}
        title={"Manage Projects"}
        menuOptions={menu}
        filters={false}
      />
      <Modal
        wrapClassName="p-mod"
        width={600}
        title=""
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="d-flex justify-content-center">
          <Checkbox>
            <span className="check-text">Re-assign</span>
          </Checkbox>

          <Checkbox>
            <span className="check-text">Mark Complete</span>
          </Checkbox>

          <Checkbox>
            <span className="check-text">Extend</span>
          </Checkbox>
        </div>

        <TextArea
          // value={value}
          // onChange={this.onChange}
          className="site-input mt-3"
          placeholder="Describe Project"
          autoSize={{ minRows: 6, maxRows: 8 }}
        />

        <button className="site-btn w-100 red-btn">Submit</button>
      </Modal>

      <Modal
        wrapClassName="p-mod"
        width={450}
        title=""
        visible={isModalVisible1}
        onOk={handleOk1}
        onCancel={handleCancel1}
      >
        <div>
          <p style={{ textAlign: "center", fontSize: 20 }}>Assign</p>
        </div>
        <div
          style={{
            border: "1px solid #e6e7e8",
            marginTop: 10,
            borderRadius: 5,
            backgroundColor: "#e6e7e8",
            marginBottom: "10px",
          }}
        >
          <Dropdown overlay={menu} trigger={["click"]}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: "10px",
                paddingRight: "10px",
                marginTop: "10px",
              }}
            >
              <div>
                <p
                  style={{ color: "#606062" }}
                  onClick={(e) => e.preventDefault()}
                >
                  Assign To Team Member
                </p>
              </div>
              <div>
                <p style={{ color: "#606062" }}>
                  <CaretDownOutlined />
                </p>
              </div>
            </div>
          </Dropdown>
        </div>
        <div>
          <Input
            id="modalInput"
            style={{
              paddingLeft: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
              backgroundColor: "#e6e7e8",
              color: "#606062",
              borderRadius: "5px",
            }}
            placeholder="Invite New Team Member"
            name="title"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div style={{ marginTop: 10 }}>
          <button
            style={{
              width: "100%",
              backgroundColor: "#3e4095",
              color: "white",
              border: "0",
              fontWeight: "bold",
            }}
          >
            <p style={{ marginTop: "10px" }}>Submit</p>
          </button>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewProjectManagment);
