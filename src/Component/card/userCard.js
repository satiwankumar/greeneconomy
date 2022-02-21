import { React, useState } from "react";
import { Card, Col, Row, Modal, Input, Dropdown, Menu, Select } from "antd";

import userAvatar from "../../Assets/Images/avatar.png";
import "./userCard.css";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const UserCard = () => {
  const Navigate = useNavigate("");
  const [formData, setformData] = useState({
    title: "",
    role: "",
  });

  const [data, setData] = useState([
    {
      id: 1,
      title: "Task 1",
      role: "",
    },
    {
      id: 2,
      title: "Task 2",
      role: "",
    },
    {
      id: 3,
      title: "Task 3",
      role: "",
    },
  ]);

  const handleChange = (e) => {
    e.preventDefault();
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRole = (value) => {
    setformData({ ...formData, role: value });
  };
  const { title, role } = formData;

  const { Option } = Select;

  const handleSubmit = (e) => {
    e.preventDefault();
    setformData({ title: "", role: "" });
    //   console.log({
    //     key :11,
    //     title:title
    // })

    setData([
      ...data,
      {
        id: uuidv4(),
        title,
        role,
      },
    ]);

    setIsModalVisible(false);
  };

  const handleDelete = (id) => {
    let dataaaa = data.filter((item) => item.id != id);

    setData(dataaaa);
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
      <Modal
        width={450}
        bodyStyle={{ backgroundColor: "#9fceee" }}
        title=""
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <p style={{ textAlign: "center", fontSize: 20 }}>Invite Team</p>
        </div>
        <form onSubmit={(e)=>handleSubmit(e)}>

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
            placeholder="Enter One or More Emails to Invite"
            name="title"
            value={title}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        {/* <div style={{ border: '1px solid #e6e7e8', marginTop: 10, borderRadius:5, backgroundColor:'#e6e7e8' }}> */}
        {/* <div style={{ border: '1px solid #e6e7e8', marginTop: 10, borderRadius:5, backgroundColor:'#e6e7e8' }}> */}
        <Select
          className="site-input dash-input"
          name="role"
          onChange={(value) => handleRole(value)}
          value={role}
          required={true}
        >
          <Option value=""> Assign Role To Invitees</Option>
          <Option value="Admin">Admin</Option>
          <Option value="SuperAdmin">SuperAdmin</Option>
        </Select>
        {/* <Dropdown overlay={menu} trigger={['click']}>
                        <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'10px', paddingRight:'10px', marginTop:'10px'}}>
                            <div>
                                <p style={{ color: '#606062' }} onClick={e => e.preventDefault()}>
                                    Assign Role To Invitees
                                </p>
                            </div>
                            <div>
                                <p style={{color:'#606062'}}>icon</p>
                            </div>
                        </div>

                    </Dropdown> */}
        {/* </div> */}
        <div style={{ marginTop: 10 }}>
          <button
            style={{
              width: "100%",
              backgroundColor: "#3e4095",
              color: "white",
              fontWeight: "bold",
            }}
            type="submit"
          >
            <p type="submit" style={{ marginTop: "10px" }}>
              Submit
            </p>
          </button>
        </div>
        </form>
      </Modal>
      <div className="d-flex align-items-center flex-wrap">
      <div
            style={{
              backgroundColor: "#00afef",
              width: "220px",
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: "center",
              textAlign: "center",
              padding: "10px",
              borderRadius: 25,
              minHeight: "190px",
              marginBottom:"10px"
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
                style={{ color: "white", fontWeight: "bold" }}
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

           alignContent: "center",
           textAlign: "center",
           padding: "10px",
           borderRadius: 25,
           minHeight: "190px",
           marginBottom: "10px",
           marginLeft: '10px'
         }}
       >
         
              <div>
                <img height={100} width={100} src={userAvatar} />
              </div>
              <div style={{ marginTop: 10 }}>
                <p>{item.title}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                 <p onClick={()=>Navigate(`/edit-notes/${item.id}`)} style={{ marginRight: 10, fontWeight: "bold" }}>Edit</p>
                <p onClick={()=>handleDelete(item.id)}  style={{ color: "red", fontWeight: "bold" }}>Delete</p>
            </div>
            </div>
        
        ))}
      </div>
    </div>
  );
};

export default UserCard;
