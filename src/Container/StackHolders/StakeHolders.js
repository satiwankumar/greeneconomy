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
  { title:"Company", dataIndex:"company", key:"company" }]
  
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
          company: 'LASEPA',
          location: 'lkeja',
          Industry: 'Electronics',
          totalReports: '938',
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
        //     company: 'LASRO',
        //     location: 'lkeja',
        //     Industry: 'Electronics',
        //     totalReports: '938',
        //     editable: false
        //   },
      )
  }
  

  return (
    <div>

<Table headings={headings} data={data} title="Manage StakeHolders"/>

    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Users)