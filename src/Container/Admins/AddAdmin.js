import React, { useState } from "react";
import { connect } from "react-redux";
import Banner from "../../Component/Tables/Banner";
import { Row, Button, Col, Divider, Select,message,Modal } from "antd";
import { Form, Input } from "antd";
import { useNavigate, useLocation } from "react-router-dom";



const AddAdmin = ({history}) => {

    const navigate =useNavigate()
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { Option } = Select;

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleRole=(value)=>{
    console.log(value);

  }


  const handleModal = (value) => {
    setIsModalVisible(value);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleSucess = (type) => {
    message.success(`Record  Added Successfully`)
    navigate("/admins");
  };



  const handleSubmit = (e) => {
    e.preventDefault()
  handleModal(true)
  };

  return (
    <>
      <Banner title={"Manage Admin"} />

      <form onSubmit={(e) => handleSubmit(e)}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Input
              name={"firstname"}
              type="text"
              className="site-input dash-input"
              placeholder={"firstname"}
              onChange={(e) => handleChange(e)}
              required
            />
          </Col>
          <Col span={12}>
            <Input
              name="lastname"
              type="text"
              className="site-input dash-input"
              placeholder="lastname"
              onChange={(e) => handleChange(e)}
              required
            />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Input
              name={"Phone"}
              type="tel"
              className="site-input dash-input"
              placeholder={"Phone"}
              onChange={(e) => handleChange(e)}
              required
            />
          </Col>
          <Col span={12}>
            <Input
              name="email"
              type="email"
              className="site-input dash-input"
              placeholder="email"
              onChange={(e) => handleChange(e)}
              required
            />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Input
              name={"date"}
              type="date"
              className="site-input dash-input"
              placeholder={"date"}
              onChange={(e) => handleChange(e)}
              required
            />
          </Col>
          <Col span={12}>
            <Select
              className="site-input dash-input"
              name="role"
              onChange={(e) => handleRole(e)}
              required
            >
              <Option value="">Assign a Role</Option>
              <Option value="Admin">Admin</Option>
              <Option value="SuperAdmin">SuperAdmin</Option>
            </Select>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Button htmlType="submit" className="site-btn w-100 purple-btn">
              Add
            </Button>
          </Col>
        </Row>

        <Modal
        width={450}
        title=""
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => handleModal(false)}
      >
        <div className="text-center">
          <p className="modal-heading">Are You Sure You Want to Add Admin?</p>
        </div>
        <div className="modal-btns">
          <button
           
            className="site-btn  red-btn"
          >
            Cancel
          </button>
          <button
           onClick={() => handleSucess()}
            className="site-btn white-btn"
          >
            Add
          </button>
        </div>
      </Modal>


      </form>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddAdmin);
