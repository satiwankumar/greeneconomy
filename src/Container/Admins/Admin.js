import React from 'react'
import { connect } from 'react-redux'

import { Menu } from 'antd'
import Table from '../../Component/Tables/Table'
import { useNavigate } from 'react-router-dom'

export const Admins = (props) => {
  const navigate = useNavigate();

  const headings = [
    { title: "SN", dataIndex: "sn", key: "sn" },

    { title: "Date", dataIndex: "date", key: "date" },
    { title: "First Name", dataIndex: "firstName", key: "firstName" },
    { title: "Last Name", dataIndex: "lastName", key: "lastName" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Assigned Role", dataIndex: "role", key: "role" },
  ]

  const data = []

  for (let i = 0; i <= 5; i++) {
    data.push(
      {
        key: i + 1,
        sn: i + 1,
        date: '1/17/2022',
        phone: '08039383746',
        email: 'nnam@gmail.com',
        firstName: 'Nnamdi',
        lastName: 'Brown',
        role: 'Super Admin',
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
        <a onClick={() => navigate('/manage-admin')}>manage</a>
      </Menu.Item>  
      <Menu.Item key="1">
        <a >remove</a>
      </Menu.Item>
    </Menu>

  )

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleRole=(value)=>{
    console.log(value);

  }

  
  return (
    <div>

      <Table headings={headings} data={data} title={"Manage Admins"} ADDButton={true} link={'/add-admin'} menuOptions={menu} />

    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Admins)