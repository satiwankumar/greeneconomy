import React from 'react'
import { connect } from 'react-redux'


import Table from '../../Component/Tables/Table'
export const ProjectManagement = (props) => {

const  headings =[ 
  { title:"SN", dataIndex:"sn", key:"sn" } ,   
  
  { title:"Date Created", dataIndex:"date", key:"date" },
  { title:"Prject Name", dataIndex:"projectName" ,key:"projectName" },
  { title:"Industry", dataIndex:"Industry", key:"Industry" },
  { title:"LGA", dataIndex:"LGA", key:"LGA" }] 
  const data = []
  
  for(let i=0;i<=10;i++){
      data.push(
        {
          key: i+1,
          sn: i+1,
          date: '1/7/2022',
          projectName: 'Shomolu Cleanup Project',
          Industry: 'HealthCare',
          LGA: 'Shomolu',
          editable: false
        },
        
            {
              key: i+2,
              sn: i+2,
              date: '1/7/2022',
              projectName: 'John',
              Industry: 'Govenment',
              LGA: 'lkeja',
              editable: false
            }
      )
  }
  

  return (
    <div>

<Table headings={headings} data={data} title={"Circular Projects"}/>

    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectManagement)