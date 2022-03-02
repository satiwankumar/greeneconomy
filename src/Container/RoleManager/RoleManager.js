import React, { useState } from "react";
import Banner from "../../Component/Tables/Banner";
import Table from "../../Component/Tables/Table";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { Row, Col, Input, Checkbox, Button } from "antd";
const RoleManager = () => {
  const [role, setRole] = useState("");
  const [data, setData] = useState([
    {
      key: 1,
      sn: 1,
      date: moment(new Date()).format("ll"),
      assignedto: "23",
      rolename: "Brown",
    },
  ]);

  const headings = [
    { title: "SN", dataIndex: "sn", key: "sn" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Role Name", dataIndex: "rolename", key: "rolename" },
    { title: "Assinged To", dataIndex: "assignedto", key: "assignedto" },
  ];

  const checkboxses = [
    "Enable All Arocess",
    "Overview Stats",
    "Tracking Dashboards",
    "Location Intelligence",
    "User Management",
    "Project Management",
    "My Personal Notes",
    "My Reminder",
    "Team Collaboration",
    "Manage Investors",
    "Manage Stake Holders",
    "Content Managment",
    "Manage Administrators",
    "Audit Trail Logs",
  ];

  const onSubmit = (e) => {
      e.preventDefault()
    setData([
      ...data,
      {
        key: 1,
        sn: 1,
        date: moment(new Date()).format("ll"),
        assignedto: "25",
        rolename: role,
      },
    ]);
    setRole("")
  };

  return (
    <>
      <Banner title={"Role Manager"} />
      <form onSubmit={(e)=>onSubmit(e)}>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 } }>
        <Col lg={12}>
          <h2 className="mt-4">Available Roles</h2>

          <Table headings={headings} data={data} />
        </Col>
        <Col lg={12}>

          <h2 className="mt-4">Create New Roles</h2>
          <Input
            name={"firstname"}
            className="site-input dash-input"
            placeholder={"Enter Your Rolename"}
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
          <h2 className="mt-4 mb-5">Select Role Access</h2>

          <Checkbox>{"enable all process"}</Checkbox>
          <Row>
            {checkboxses.map((item) => (
              <Col span={12}>
                <Checkbox>
                  <span className="check-text">{item}</span>
                </Checkbox>
              </Col>
            ))}
          </Row>

          <Col span={24}>
            <Button htmlType="submit" className="site-btn w-100 red-btn">Create New Role</Button>
          </Col>
        </Col>
      </Row>
      </form>
    </>
  );
};

export default RoleManager;
