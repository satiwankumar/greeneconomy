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
  Radio,
  Calendar,
  message
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

  const [role, setRole] = useState("")


  const headings = [
    { title: "SN", dataIndex: "sn", key: "sn" },
    { title: "Date Created", dataIndex: "dateCreated", key: "dateCreated" },
    { title: "Milestone Name", dataIndex: "milestonename", key: "milestonename" },
    { title: "value", dataIndex: "value", key: "value" },
    { title: "Assigned To", dataIndex: "AssignedTo", key: "AssignedTo" },
    { title: "Due Date", dataIndex: "DueDate", key: "DueDate" },

  ];
  const data = [];

  for (let i = 0; i <= 5; i++) {
    data.push(
      {
        key: i + 1,
        sn: i + 1,
        dateCreated: "1/17/2022",
        milestonename: "My MileStone One",
        value: "15%",
        AssignedTo: "Shomolu",
        editable: false,
        DueDate: "2/17/2022",

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

  const [type, setType] = useState("");

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

  

  const handleSucess = (type) => {
    message.success(`Project ${type} Successfully`);

    handleOk1();
    setIsModalVisible(false)
    
  
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
      title: "Title",
      text: "Shomolu Cleanup Project",
    },
    {
      title: "Created/Due",
      text: "12/17/2022 / 12/25/2022",
    },
    {
      title: "Indstry",
      text: "Shomolu Cleanup Project",
    },
  ];

  const data1 = [
    { name: "Informational", value: 400 },
    { name: "Innovation", value: 400 },

  ];

  const COLORS = ["#008ffb", "#00e396"];
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
        <Col md={8}>
          <PieChart width={280} height={300}>
            <Pie
              isAnimationActive={true}
              data={data1}
              innerRadius={75}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={1}
              dataKey="value"
            >
              <Label
                value="50% Completed"
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
        <Col md={16}>
          {metaData?.map((item) => (
            <Row>
              <Col md={12}>
                <h2>{item?.title}</h2>
                <p>{item?.text}</p>
              </Col>
              <Col md={12}>
                <h2>{item?.title}</h2>
                <p>{item?.text}</p>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>

      <Table
        headings={headings}
        ADDButton={false}
        link={"/project-managment"}
        data={data}
        title={"Milestones"}
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
        <div>
          <h3 style={{ textAlign: "center" }}>Manage </h3>
        </div>
        <div className="d-flex justify-content-center">
          <Radio.Group onChange={(e) => setType(e.target.value)} value={type}>
            <Radio value={"assign"}>
              <span className="check-text">Re-assign</span>
            </Radio>
            <Radio value="markcomplete">
              <span className="check-text">Complete</span>
            </Radio>
            <Radio value={"extend"}>
              <span className="check-text">Extend</span>
            </Radio>
          </Radio.Group>
          {/* <Checkbox>
            <span className="check-text">Re-assign</span>
          </Checkbox>

          <Checkbox>
            <span className="check-text">Mark Complete</span>
          </Checkbox>

          <Checkbox>
            <span className="check-text">Extend</span>
          </Checkbox> */}
        </div>
        {type == "assign" ? (
          <>
            <TextArea
              // value={value}
              // onChange={this.onChange}
              className="site-input mt-3"
              placeholder="Describe Project"
              autoSize={{ minRows: 6, maxRows: 8 }}
              
            />

            <button  onClick={()=>handleSucess("Managed")} className="site-btn w-100 red-btn">Submit</button>
          </>
        ) : (
          ""
        )}

        {type == "extend" ? (
          <>
            <Calendar fullscreen={false} />

            <button onClick={()=>handleSucess("Managed")} className="site-btn w-100 red-btn">Submit</button>
          </>
        ) : (
          ""
        )}
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
          <p style={{ textAlign: "center", fontSize: 20 ,marginBottom:"-20px"}}>Assign</p>
        </div>
      <div >  
          <Select
            className="site-input dash-input"
            name="role"
            onChange={(value) => setRole(value)}
            value={role}
            required={true}
          >
            <Option value=""> Assign  To Team Members</Option>
            <Option value="Team member 1<">Team member 1</Option>
            <Option value="Team member 2">Team member 2</Option>
          </Select>
          </div>
        

        <div style={{ marginTop: 10 }}>
          <button
          onClick={()=>handleSucess("Assigned")}
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
