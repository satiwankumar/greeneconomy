import { React, useState } from 'react'
// import logo from './logo.svg';
import './Table.css';
import 'antd/dist/antd.css';
import { Table,Button ,Tag, Space,Menu, Dropdown } from 'antd';
// import Header from '../../Component/Tables/TableHeaders'
import { Row, Col, Divider } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';


const App = ({headings,data,title}) => {
  const { Column, ColumnGroup } = Table;
 
  const [displayActions, setDisplayActions] = useState(false)
  const [actionKey, setActionKey] = useState('')
  const renderActions = (record) => record.key === actionKey;

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <>
       <Row justify="space-between">
      <Col span={18}>
          <h1>{title}</h1>
      </Col>
      <Col span={6}>
      <Button>Add</Button>
      </Col>
    </Row>
    <hr/>
      <Table dataSource={data} rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}>
        {
            headings?.map((heading)=>(
<Column title={heading.title} dataIndex={heading.dataIndex} key={heading.key} />
            ))
        }
        
  
        <Column
          title="Action"
          key="action"
          render={(text, record) => {
            const displayActions = renderActions(record)
            return (
              <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
     <CaretDownOutlined />
    </a>
  </Dropdown>
              // <Space size="middle">
              //   <div style={{ display: 'flex', flexDirection: 'column' }}>

              //   <i onClick={() => { setDisplayActions(!displayActions); setActionKey(record.key) }} className="fas fa-arrow-down"></i>
                  
              //     {
              //       displayActions ? (
              //         <div style={{ backgroundColor: '#3e4095', color: 'white', height: 80, width: 100, position: 'absolute', top: 40, right: 70, textAlign:'center', padding:5, paddingTop:10, borderRadius:15 }}>
              //           <p>Remove</p>
              //           <p>Manage</p>
              //         </div>
              //       ) : null
              //     }
              //   </div>
              // </Space>
            )
          }}
        />
      </Table>
    </>
  )
}
export default App;
