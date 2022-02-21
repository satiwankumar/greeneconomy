import { React, useState } from 'react'
import { Card, Col, Row, Modal, Input, Dropdown, Menu, Button } from 'antd';
import './userForm.css'


const UserForm = () => {
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
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', margin: 40, width: '100%', justifyContent: 'center' }}>
                <div style={{ margin: 20 }}>
                    <Input id='modalInput' style={{ paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#e6e7e8', color: '#606062', width: '320px', borderRadius: 5 }} placeholder="First Name" />
                </div>
                <div style={{ margin: 20 }}>
                    <Input id='modalInput' style={{ paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#e6e7e8', color: '#606062', width: '320px', borderRadius: 5 }} placeholder="Last Name" />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', margin: 40, width: '100%', justifyContent: 'center' }}>
                <div style={{ margin: 20 }}>
                    <Input id='modalInput' style={{ paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#e6e7e8', color: '#606062', width: '320px', borderRadius: 5 }} placeholder="Company" />
                </div>
                <div style={{ margin: 20 }}>
                    <Input id='modalInput' style={{ paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#e6e7e8', color: '#606062', width: '320px', borderRadius: 5 }} placeholder="Location" />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', margin: 40, width: '100%', justifyContent: 'center' }}>
                <div style={{ margin: 20 }}>
                    <Input id='modalInput' style={{ paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#e6e7e8', color: '#606062', width: '320px', borderRadius: 5 }} placeholder="Phone" />
                </div>
                <div style={{ margin: 20 }}>
                    <Input id='modalInput' style={{ paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#e6e7e8', color: '#606062', width: '320px', borderRadius: 5 }} placeholder="Email" />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', margin: 40, width: '100%', justifyContent: 'center' }}>
                <div style={{ margin: 20 }}>
                    <Input id='modalInput' style={{ paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#e6e7e8', color: '#606062', width: '320px', borderRadius: 5 }} placeholder="Total Invested" />
                </div>
                <div style={{ margin: 20 }}>
                <div style={{ paddingLeft: '10px', paddingTop: '10px', backgroundColor: '#e6e7e8', color: '#606062', width: '320px', borderRadius: 5 }}>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'2px', paddingRight:'10px',}}>
                            <div>
                                <p style={{ color: '#606062' }} onClick={e => e.preventDefault()}>
                                    Assign Role To Invitees
                                </p>
                            </div>
                            <div>
                                <p style={{color:'#606062'}}>icon</p>
                            </div>
                        </div>

                    </Dropdown>
                </div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', margin: 40, width: '100%', justifyContent: 'center' }}>
                <div style={{ margin: 20, width:'36%', display:'flex', justifyContent:'center'}}>
                    <button style={{width:'100%',backgroundColor:'#3e4095',color:'white', fontWeight:'bold'}}>
                        <p style={{margin:5}}>Submit</p>
                    </button>
                </div>
            </div>

        </div>
    )
}


export default UserForm