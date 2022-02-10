import React from 'react'
import { Row, Col, Divider } from 'antd';


const Banner = ({title}) => {
  return (
    <>
    
<Row justify="space-between">
      <Col span={18}>
          <h1>{title}</h1>
      </Col>
   
    </Row>
    <hr/>
 
    </>
  )
}

export default Banner