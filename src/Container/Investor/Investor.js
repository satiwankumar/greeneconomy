import React from 'react'
import { connect } from 'react-redux'


import Table from '../../Component/Tables/Table'
export const Users = (props) => {

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
  const data = []
  
  for(let i=0;i<=20;i++){
      data.push(
        {
          key: i,
          sn: i,
          date: '1/7/2022',
          phone: '09329319310313',
          email: 'test@gmail.com',
          firstName: 'John',
          lastName: 'Brown',
          company: 'Coca Cola',
          location: 'New York No. 1 Lake Park',
          Industry: 'Electronics',
          totalReports: '938',
          editable: false
        },
      )
  }
  

  return (
    <div>

<Table headings={headings} data={data} title="Investors"/>

    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Users)