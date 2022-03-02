  import { React, useState } from "react";
  import { Card, Col, Row, Modal, Input, Dropdown, Menu } from "antd";
  import ReminderAvatar from "../../Assets/Images/reminder.png";

  import "./userCard.css";

  import { v4 as uuidv4 } from "uuid";
  import { useNavigate } from "react-router-dom";

  const ReminderCard = () => {
    const Navigate = useNavigate("");
    const [formData, setformData] = useState({
      title: "",
      date: "",
    });

    const [data, setData] = useState([
      {
        id: 1,
        title: "Task 1",
        date: "",
      },
      {
        id: 2,
        title: "Task 2",
        date: "",
      },
      {
        id: 3,
        title: "Task 3",
        date: "",
      },
    ]);

    const handleChange = (e) => {
      e.preventDefault();
      setformData({ ...formData, [e.target.name]: e.target.value });
    };

    const { title, date } = formData;

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
      setformData({ title: "", date: "" });
      //   console.log({
      //     key :11,
      //     title:title
      // })

      setData([
        ...data,
        {
          id: uuidv4(),
          title,
          date,
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
        <h4 style={{marginLeft:"20px",fontSize:"30px" }}>Reminders</h4>
        <Modal
          width={450}
          bodyStyle={{ backgroundColor: "#309CF4" }}
          title=""
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div>
            <p style={{ textAlign: "center", fontSize: 20 }}>Add New</p>
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
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
                placeholder="Add Task here"
                name="title"
                value={title}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div
              style={{
                border: "1px solid #e6e7e8",
                marginTop: 10,
                borderRadius: 5,
                backgroundColor: "#e6e7e8",
              }}
            >
              <Input
                id="modalInput1"
                type="date"
                style={{
                  paddingLeft: "10px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  backgroundColor: "#e6e7e8",
                  color: "#606062",
                }}
                placeholder="Enter date"
                name="date"
                value={date}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div style={{ marginTop: 10 }}>
              <button
                type="submit"
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
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: "center",
              textAlign: "center",
              padding: "10px",
              borderRadius: 25,
              minHeight: "190px",
              marginBottom:"10px",
              marginLeft: '10px',
              marginTop: '10px'
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
                style={{ color: "white", fontWeight: "bold",fontSize:"20px" ,textAlign:"center",justifyContent:"center"}}
              >
                Add New
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
              <div>
                <img height={100} width={100} src={ReminderAvatar} />
              </div>
              <div style={{ marginTop: 10 }}>
                <p>{item.title}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  marginTop:"-15px",
                }}
              >
                <p
                  onClick={() => Navigate(`/edit-notes/${item.id}`)}
                  style={{ marginRight: 10 }}
                >
                  Edit
                </p>
                <p onClick={() => handleDelete(item.id)} style={{ color: "red" }}>
                  Delete
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default ReminderCard;
