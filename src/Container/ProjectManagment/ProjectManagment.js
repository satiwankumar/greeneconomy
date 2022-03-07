import React, { useState } from 'react'
import { connect } from 'react-redux'

import { Row, Col, Input, Select, Button, Modal, Dropdown, Menu, Checkbox,Radio ,message} from 'antd'

import Table from '../../Component/Tables/Table'
import { CaretDownOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom";



export const ProjectManagement = (props) => {
  const Navigate =useNavigate()

  const headings = [
    { title: "SN", dataIndex: "sn", key: "sn" },

    { title: "Date Created", dataIndex: "date", key: "date" },
    { title: "Prject Name", dataIndex: "projectName", key: "projectName" },
    { title: "Industry", dataIndex: "Industry", key: "Industry" },
    { title: "LGA", dataIndex: "LGA", key: "LGA" }]
  const data = []

  for (let i = 0; i <= 3; i++) {
    data.push(
      {
        key: i + 1,
        sn: i + 1,
        date: '1/7/2022',
        projectName: 'Shomolu Cleanup Project',
        Industry: 'HealthCare',
        LGA: 'Shomolu',
        editable: false
      },

      {
        key: i + 2,
        sn: i + 2,
        date: '1/7/2022',
        projectName: 'John',
        Industry: 'Govenment',
        LGA: 'lkeja',
        editable: false
      }
    )
  }
  // style={{ paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#e6e7e8', color: '#606062', width: '320px', borderRadius: 5 }}
  const { Option } = Select;
  const { TextArea } = Input;
  function handleChange(value) {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  }




  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);



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
        <a onClick={() => Navigate("/manage-projects")}>Manage Project</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a onClick={() => showModal1()} >Suspend Project</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a onClick={() => setIsModalVisible2(true)} >Delete Project</a>
      </Menu.Item>

    </Menu>

  )

  const handleSucess = (type) => {
    message.success(`Project ${type} Successfully`);

    handleOk1();
    setIsModalVisible2(false)
    
  
  };

  const handleError = () => {
    // message.error("User Canceled successfully")
    handleOk1();
    setIsModalVisible2(false)

    
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
        <div>
          <h1 className='heading' > Circular Projects</h1>
        </div>
      </div>

      <h3 className='mt-4'>
        Create New
      </h3>



      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col md={14}>

          <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
            <Col md={14}>
              <Input className='site-input' placeholder="Project Name" />


            </Col>
            <Col md={10}>
              <Select className='site-input'
                labelInValue
                defaultValue={{ value: 'Industry' }}
                onChange={handleChange}
              >
                <Option value="HealthCare">HealthCare</Option>
                <Option value="Govenment">Govenment</Option>
              </Select>
            </Col>

          </Row>
        </Col>
        <Col md={10}>
          <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
            <Col md={12}>
              <Select className='site-input'
                labelInValue
                defaultValue={{ value: 'LGA' }}
                onChange={handleChange}
              >
                <Option value="Shomolu">Shomolu</Option>
                <Option value="lkeja">lkeja</Option>
              </Select>

            </Col>
            <Col md={12}>
              <Button className='w-100'>Create</Button>


            </Col>

          </Row>


        </Col>
        <Col md={24}>

          <TextArea
            // value={value}
            // onChange={this.onChange}
            className='site-input mt-3'
            placeholder="Describe Project"
            autoSize={{ minRows: 6, maxRows: 8 }}
          />
        </Col>

      </Row>
      <h3 className='mt-4'>
        Manage Existing
      </h3>

      <Table headings={headings} data={data}  menuOptions={menu} filters={false}  />
     
      <Modal
        width={450}
        title=""
        visible={isModalVisible1}
        onOk={handleOk1}
        onCancel={handleCancel1}
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
        visible={isModalVisible2}
        onOk={handleOk1}
        onCancel={handleCancel1}
      >
        <div className="text-center">
          <p className="modal-heading">Are You Sure You Want to Delete?</p>
        </div>
        <div className="modal-btns">
          <button onClick={() => handleError()} className="site-btn  red-btn">
            Cancel
          </button>
          <button
            onClick={() => handleSucess("Deleted")}
            className="site-btn white-btn"
          >
            Delete
          </button>
        </div>
      </Modal>

  
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectManagement)