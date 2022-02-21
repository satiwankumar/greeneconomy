import React, { useState } from 'react'
import { connect } from 'react-redux'

import { Row, Col, Input, Select, Button, Modal, Dropdown, Menu, Checkbox } from 'antd'

import Table from '../../Component/Tables/Table'
import { CaretDownOutlined } from '@ant-design/icons'


export const ProjectManagement = (props) => {

  const headings = [
    { title: "SN", dataIndex: "sn", key: "sn" },

    { title: "Date Created", dataIndex: "date", key: "date" },
    { title: "Prject Name", dataIndex: "projectName", key: "projectName" },
    { title: "Industry", dataIndex: "Industry", key: "Industry" },
    { title: "LGA", dataIndex: "LGA", key: "LGA" }]
  const data = []

  for (let i = 0; i <= 10; i++) {
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
        <a onClick={() => showModal()}>Manage Project</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a onClick={() => showModal1()} >Suspend Project</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a onClick={() => showModal1()} >Delete Project</a>
      </Menu.Item>

    </Menu>

  )


  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
        <div>
          <h1 className='heading' > Circular Projects</h1>
        </div>
      </div>

      <h2 className='mt-4'>
        Create New
      </h2>











      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col span={14}>

          <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
            <Col span={14}>
              <Input className='site-input' placeholder="Project Name" />


            </Col>
            <Col span={10}>
              <Select className='site-input'
                labelInValue
                defaultValue={{ value: 'Industry' }}
                onChange={handleChange}
              >
                <Option value="jack">Jack (100)</Option>
                <Option value="lucy">Lucy (101)</Option>
              </Select>
            </Col>

          </Row>
        </Col>
        <Col span={10}>
          <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
            <Col span={12}>
              <Select className='site-input'
                labelInValue
                defaultValue={{ value: 'LGA' }}
                onChange={handleChange}
              >
                <Option value="jack">Jack (100)</Option>
                <Option value="lucy">Lucy (101)</Option>
              </Select>

            </Col>
            <Col span={12}>
              <Button className='w-100'>Create</Button>


            </Col>

          </Row>


        </Col>
        <Col span={24}>

          <TextArea
            // value={value}
            // onChange={this.onChange}
            className='site-input mt-3'
            placeholder="Describe Project"
            autoSize={{ minRows: 6, maxRows: 8 }}
          />
        </Col>

      </Row>



      <Table headings={headings} data={data} title={"Manage Project"} menuOptions={menu} filters={false}  />
      <Modal wrapClassName='p-mod' width={600} title="" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

        <div className='d-flex justify-content-center'>

          <Checkbox>
            <span className='check-text'>Re-assign</span>
          </Checkbox>


          <Checkbox>
            <span className='check-text'>Mark Complete</span>
          </Checkbox>

          <Checkbox>
            <span className='check-text'>Extend</span>
          </Checkbox>

        </div>

        <TextArea
          // value={value}
          // onChange={this.onChange}
          className='site-input mt-3'
          placeholder="Describe Project"
          autoSize={{ minRows: 6, maxRows: 8 }}
        />




        <button className='site-btn w-100 red-btn'>Submit</button>

      </Modal>




      <Modal wrapClassName='p-mod' width={450} title="" visible={isModalVisible1} onOk={handleOk1} onCancel={handleCancel1}>
        <div>
          <p style={{ textAlign: 'center', fontSize: 20 }}>Assign</p>
        </div>
        <div style={{ border: '1px solid #e6e7e8', marginTop: 10, borderRadius: 5, backgroundColor: '#e6e7e8', marginBottom: "10px" }}>
          <Dropdown overlay={menu} trigger={['click']}>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '10px', paddingRight: '10px', marginTop: '10px' }}>
              <div>
                <p style={{ color: '#606062' }} onClick={e => e.preventDefault()}>
                  Assign  To Team Member
                </p>
              </div>
              <div>
                <p style={{ color: '#606062' }}>

                  <CaretDownOutlined />
                </p>
              </div>
            </div>

          </Dropdown>
        </div>
        <div>
          <Input id='modalInput' style={{ paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#e6e7e8', color: '#606062', borderRadius: "5px" }} placeholder="Invite New Team Member" name="title" onChange={(e) => handleChange(e)} required />
        </div>

        <div style={{ marginTop: 10 }}>
          <button style={{ width: '100%', backgroundColor: '#3e4095', color: 'white', border: "0", fontWeight: 'bold' }}>
            <p style={{ marginTop: '10px' }}>Submit</p>
          </button>
        </div>
      </Modal>

    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectManagement)