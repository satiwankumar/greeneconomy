import React, { useState } from "react";
import { connect } from "react-redux";
import { Menu, Modal, Button, Dropdown, Input, message, Select } from "antd";
import { useNavigate } from "react-router-dom";

import Table from "../../Component/Tables/Table";
import { CaretDownOutlined } from "@ant-design/icons";

export const Users = (props) => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [datapoint, setDataPoint] = useState("");

  const { Option } = Select;
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
  const showModal2 = () => {
    setIsModalVisible2(true);
  };

  const handleOk2 = () => {
    setIsModalVisible2(false);
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };

  const headings = [
    { title: "SN", dataIndex: "sn", key: "sn" },

    { title: "Date", dataIndex: "date", key: "date" },
    { title: "First Name", dataIndex: "firstName", key: "firstName" },
    { title: "Last Name", dataIndex: "lastName", key: "lastName" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Location", dataIndex: "location", key: "location" },
    { title: "Industry", dataIndex: "Industry", key: "Industry" },
    { title: "Total Reports", dataIndex: "totalReports", key: "totalReports" },
  
  ];
  
const location = [
  "Agege",
  "Alimosho",
  "Apapa",
  "Kosofe",
  "Moshin",
  "lkeja"
]

  
  const data = [];




  for (let i = 0; i <= 20; i++) {
    data.push({
      key: i + 1,
      sn: i + 1,
      date: "1/7/2022",
      phone: "08039383736",
      email: "test@gmail.com",
      firstName: "John",
      lastName: "Brown",
      company: "Coca Cola",
      location: location[Math.floor(Math.random() * (5 + 1))],
      Industry: "Electronics",
      totalReports: "938",
      editable: false,
    });
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a>View Details</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a onClick={() => showModal()}>Approve Users</a>
      </Menu.Item>

      <Menu.Item key="2">
        <a onClick={() => showModal1()}>Assign Data points</a>
      </Menu.Item>

      <Menu.Item key="3">
        <a onClick={() => showModal2()}>Suspend Users</a>
      </Menu.Item>

      <Menu.Item key="4">
        <a>GDPR Complaince</a>
      </Menu.Item>
    </Menu>
  );

  const handleSucess = (type) => {
    message.success(`User ${type} Successfully`);

    handleOk();
    handleOk2();
  };

  const handleError = () => {
    // message.error("User Canceled successfully")
    handleOk();
    handleOk2();
  };

  return (
    <div>
      <Table
        headings={headings}
        data={data}
        title={"Manage Users"}
        menuOptions={menu}
        filters={true}
      />
      <Modal
        width={450}
        title=""
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="text-center">
          <p className="modal-heading">Are You Sure You Want to Approve?</p>
        </div>
        <div className="modal-btns">
          <button onClick={() => handleError()} className="site-btn  red-btn">
            Cancel
          </button>
          <button
            onClick={() => handleSucess("Approved")}
            className="site-btn white-btn"
          >
            Approve
          </button>
        </div>
      </Modal>

      <Modal
        width={450}
        title=""
        visible={isModalVisible2}
        onOk={handleOk2}
        onCancel={handleCancel2}
      >
        <div className="text-center">
          <p className="modal-heading">Are You Sure You Want to Suspend?</p>
        </div>
        <div className="modal-btns">
          <button onClick={() => handleError()} className="site-btn  red-btn">
            Cancel
          </button>
          <button
            onClick={() => handleSucess("Suspended")}
            className="site-btn white-btn"
          >
            Suspend
          </button>
        </div>
      </Modal>

      <Modal
        width={450}
        title=""
        visible={isModalVisible1}
        onOk={handleOk1}
        onCancel={handleCancel1}
      >
        <div>
          <p style={{ textAlign: "center", fontSize: 20 }}>
            Select Data Point To Assign
          </p>
        </div>
        {/* <div
          style={{
            // border: "1px solid #e6e7e8",
            // marginTop: 10,
            // borderRadius: 5,
            // backgroundColor: "#e6e7e8",
            // marginBottom: "10px",
          }}
        > */}
          <Select
            className="site-input dash-input2"
            name="role"
            onChange={(e) => setDataPoint(e)}
            value={datapoint}
            required
          >
            <Option value="">Select Data Point</Option>
            <Option value="Recycling Target Group">
              Recycling Target Group
            </Option>
            <Option value="Medical Target Group">Medical Target Group</Option>
            <Option value="LASRO Survey Target Group">
              LASRO Survey Target Group
            </Option>
          </Select>
          {/* <Dropdown overlay={menu1} trigger={["click"]}>
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
                  Select Data Point
                </p>
              </div>
              <div>
                <p style={{ color: "#606062" }}>
                  <CaretDownOutlined />
                </p>
              </div>
            </div>
          </Dropdown> */}
        {/* </div> */}

        <div style={{ marginTop: 10 }}>
          <button onClick={()=>setIsModalVisible1(false)} type="submit" className="red-btn w-100 ">
            <p style={{ marginTop: "10px" }}>Submit</p>
          </button>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
