import React from 'react'
import { connect } from 'react-redux'
import { Menu, Modal, Button, Dropdown, Input, message, Select } from "antd";



import Table from '../../Component/Tables/Table'
export const DataPreference = (props) => {

  const headings = [
    { title: "SN", dataIndex: "sn", key: "sn" },

    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Data Preference Name", dataIndex: "DataPreferenceName", key: "DataPreferenceName" },
    { title: "Assigned to", dataIndex: "AssignedTo", key: "AssignedTo" },
   
  ]

  const data = []

  for (let i = 0; i <= 5; i++) {
    data.push(
      {
        key: i + 1,
        sn: i + 1,
        date: '1/17/2022',
        DataPreferenceName: 'Recyclers Data Preference',
        AssignedTo:"22 Users",
        editable: false
      },
      // {
      //     key: i,
      //     sn: i,
      //     date: '1/17/2022',
      //     phone: '08039383746',
      //     email: 'nnam@gmail.com',
      //     firstName: 'Nnamdi',
      //     lastName: 'Brown',
      //     role:'Admin',
      //     editable: false
      //   },
    )
  }


  
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a>remove</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a >edit</a>
      </Menu.Item>

      
    </Menu>
  );

  // <Menu.Item key="0">
  //       <a href="https://www.antgroup.com">1st menu item</a>
  //     </Menu.Item>
  //     <Menu.Item key="1">
  //       <a href="https://www.aliyun.com">2nd menu item</a>
  //     </Menu.Item>


  return (
    <div>

      <Table headings={headings} data={data} title={"Data Preference List"} ADDButton={true} link={'/manage-data-preference'} menuOptions={menu} />

    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(DataPreference)