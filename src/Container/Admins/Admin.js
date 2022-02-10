import React from 'react'
import { connect } from 'react-redux'


import Table from '../../Component/Tables/Table'
export const Admins = (props) => {

const  headings =[ 
    { title:"SN", dataIndex:"sn", key:"sn" } ,   
    
    { title:"Date", dataIndex:"date", key:"date" },
  { title:"First Name", dataIndex:"firstName" ,key:"firstName" },
  { title:"Last Name", dataIndex:"lastName", key:"lastName" },
  { title:"Phone", dataIndex:"phone", key:"phone" },
  { title:"Email", dataIndex:"email", key:"email" },
  { title:"Assigned Role", dataIndex:"role", key:"role" },
]
  
  const data = []
  
  for(let i=0;i<=5;i++){
      data.push(
        {
          key: i+1,
          sn: i+1,
          date: '1/17/2022',
          phone: '08039383746',
          email: 'nnam@gmail.com',
          firstName: 'Nnamdi',
          lastName: 'Brown',
          role:'Super Admin',
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
  

  return (
    <div>

<Table headings={headings} data={data} title={"Manage Admins"}/>

    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Admins)