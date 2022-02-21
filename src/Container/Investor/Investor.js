import React from 'react'
import { connect } from 'react-redux'

import {Menu } from 'antd'
import { useNavigate } from 'react-router'
import Table from '../../Component/Tables/Table'
export const Users = (props) => {
  const navigate = useNavigate();

 const  headings =[  
    { title:"SN", dataIndex:"sn", key:"sn" } ,   
    
    { title:"Date", dataIndex:"date", key:"date" },
  { title:"First Name", dataIndex:"firstName" ,key:"firstName" },
  { title:"Last Name", dataIndex:"lastName", key:"lastName" },
  { title:"Phone", dataIndex:"phone", key:"phone" },
  { title:"Email", dataIndex:"email", key:"email" },
  { title:"Location", dataIndex:"location", key:"location" },
  { title:"Industry", dataIndex:"Industry", key:"Industry" },
  { title:"Total Reports", dataIndex:"totalReports", key:"totalReports" }] 
  
  const location = [
    "Agege",
    "Alimosho",
    "Apapa",
    "Kosofe",
    "Moshin",
    "lkeja"
  ]
  
  const data = []
  

  for(let i=0;i<=20;i++){
      data.push(
        {
          key: i,
          sn: i,
          date: '1/7/2022',
          phone: "08039383736",
          email: 'test@gmail.com',
          firstName: 'John',
          lastName: 'Brown',
          company: 'Coca Cola',
          location:   location[Math.floor(Math.random() * (5 + 1))]          ,
          Industry: 'Electronics',
          totalReports: '938',
          editable: false
        },
      )
  }
  
  const menu = (

    <Menu>
      <Menu.Item key="0">
        <a onClick={() => navigate('/manage-investor')}>manage</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a >remove</a>
      </Menu.Item>
    </Menu>

  )
  return (
    <div>

<Table headings={headings} data={data} menuOptions={menu} ADDButton={true} link={"/add-investor"} title="Investors"/>

    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Users)