import { React, useState, useEffect } from "react";
import { Card, Col, Row, Modal, Input, Dropdown, Select, Menu } from "antd";
import NotesAvatar from "../../Assets/Images/Book.png";
import "./userCard.css";
import { formatTimeStr } from "antd/lib/statistic/utils";
import { v4 as uuidv4 } from "uuid";

import { useNavigate } from "react-router-dom";

const Notes = () => {
  const Navigate = useNavigate("");
  const [title, settitle] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      title: "Notes Title Goes Here",
    },
    {
      id: 2,
      title: "Notes Title Goes Here",
    },
    {
      id: 3,
      title: "Notes Title Goes Here",
    },
    {
      id: 4,
      title: "Notes Title Goes Here",
    },
    {
      id: 5,
      title: "Notes Title Goes Here",
    },
    {
      id: 6,
      title: "Notes Title Goes Here",
    },
  ]);

  const { Option } = Select;
  const handleRole = (value) => {
    console.log(value);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    settitle("");
    //   console.log({
    //     key :11,
    //     title:title
    // })

    setData([
      ...data,
      {
        id: uuidv4(),
        title: title,
      },
    ]);

    setIsModalVisible(false);
  };

  const handleDelete = (id) => {
    let dataaaa = data.filter((item) => item.id != id);

    setData(dataaaa);
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  return (
    <div style={{ margin: 40, alignContent: "center", alignItems: "center" }}>
      <h4 style={{ marginLeft: "20px", fontSize: "30px" }}>Personal Notes</h4>

      <Modal
        width={450}
        bodyStyle={{ backgroundColor: "#9fceee" }}
        title=""
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <p style={{ textAlign: "center", fontSize: 20 }}>Add New</p>
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
              }}
              placeholder="Enter Note Title"
              name="title"
              value={title}
              onChange={(e) => settitle(e.target.value)}
              required
            />
          </div>
          {/* <div style={{ border: '1px solid #e6e7e8', marginTop: 10, borderRadius:5, backgroundColor:'#e6e7e8' }}> */}
          {/* <Select
            className="site-input dash-input"
            name="role"
            onChange={(e) => setRole(e)}
            value={role}
            required
          >
            <Option value=""> Assign Role To Invitees</Option>
            <Option value="Admin">Admin</Option>
            <Option value="SuperAdmin">SuperAdmin</Option>
          </Select> */}

          <div style={{ marginTop: 10 }}>
            <button
              type="Submit"
              style={{
                width: "100%",
                backgroundColor: "#3e4095",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <p style={{ marginTop: "10px" }}>Submit</p>
            </button>
          </div>
        </form>
      </Modal>
      <div className="d-flex align-items-center flex-wrap">
        <div
          style={{
            backgroundColor: "#00afef",
            width: "220px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center",
            padding: "10px",
            borderRadius: 25,
            minHeight: "190px",
            marginBottom: "10px",
            marginLeft: "10px",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "100%",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <p
              onClick={() => showModal()}
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              INVITE
            </p>
          </div>
        </div>

        {data.map((item) => (
          <div
            style={{
              backgroundColor: "#00afef",
              width: "220px",
              padding: "20px",
              alignContent: "center",
              textAlign: "center",
              padding: "10px",
              borderRadius: 25,
              minHeight: "185px",
              marginBottom: "10px",
              marginLeft: "10px",
              marginTop: "10px",
            }}
          >
            <div style={{ marginTop: "10px" }}>
              <img height={100} width={100} src={NotesAvatar} />
            </div>
            <div style={{ marginTop: 20 }}>
              <p>{item.title}</p>
            </div>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "-15px",
              }}
            >
              <p
                className="mb-0"
                onClick={() => Navigate(`/edit-notes/${item.id}`)}
                style={{ marginRight: 10 }}
              >
                Edit
              </p>
              <p
                className="mb-0"
                onClick={() => handleDelete(item.id)}
                style={{ color: "red" }}
              >
                Delete
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
