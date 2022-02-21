import React ,{useState}from "react";
import { connect } from "react-redux";
import Banner from "../../Component/Tables/Banner";
import { Row, Button, Col, Divider, Select,Modal,message } from "antd";
import { useNavigate } from "react-router-dom";

import { Form, Input } from "antd";

const AddStakeHolder = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);


  const { Option } = Select;
 const handleModal = (value) => {
    setIsModalVisible(value);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };


  const handleSucess= (type)=>{
    message.success(`User ${type} Successfully`)
    
    navigate("/investors")

  }

  
  
  return (
    <>
      <Banner title={"Manage Investor"} />
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Input
            name={"firstname"}
            className="site-input dash-input"
            placeholder={"First Name"}
          />
        </Col>
        <Col span={12}>
          <Input
            name="lastname"
            className="site-input dash-input"
            placeholder="Last Name"
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Input
            name={"Phone"}
            className="site-input dash-input"
            placeholder={"Company"}
          />
        </Col>
        <Col span={12}>
          <Input
            name="email"
            className="site-input dash-input"
            placeholder="Location"
          />
        </Col>
      </Row>{" "}
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Input
            name={"firstname"}
            className="site-input dash-input"
            placeholder={"Phone"}
          />
        </Col>
        <Col span={12}>
          <Input
            name="lastname"
            className="site-input dash-input"
            placeholder="Email"
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Input
            name={"firstname"}
            className="site-input dash-input"
            placeholder={"Total Invested"}
          />
        </Col>
        <Col span={12}>
          <Select
            className="site-input dash-input"
            labelInValue
            defaultValue={{ value: "Assign a Role" }}
            // onChange={handleChange}
          >
            <Option value="jack">Jack (100)</Option>
            <Option value="lucy">Lucy (101)</Option>
          </Select>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Button
            // onClick={() => navigate("/investors")}
            onClick={()=>handleModal(true)}
            className="site-btn w-100 purple-btn"
          >
            Update
          </Button>
        </Col>
      </Row>

      <Modal width={450} title="" visible={isModalVisible} onOk={handleOk} onCancel={()=>handleModal(false)}>
        <div className='text-center'>
          <p className='modal-heading'>Are You Sure You Want to Update?</p>
        </div>
        <div className='modal-btns'>
          <button onClick={()=> handleModal(false) } className='site-btn  red-btn'>Cancel</button>
          <button onClick={()=>  handleSucess("Updated")} className='site-btn white-btn'>Update</button>
        </div>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddStakeHolder);
