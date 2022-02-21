import React from "react";
import { connect } from "react-redux";

import { Menu } from "antd";
import Table from "../../Component/Tables/Table";
import { useNavigate } from "react-router-dom";

export const AuthenticationLog = (props) => {
  const navigate = useNavigate();

  const headings = [
    { title: "SN", dataIndex: "sn", key: "sn" },

    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Full Name", dataIndex: "fullName", key: "fullName" },
    { title: "Time Stamp", dataIndex: "timestamp", key: "timestamp" },
    { title: "Type", dataIndex: "type", key: "type" },

    { title: "Description", dataIndex: "description", key: "description" },
  ];

  const data = [];

  for (let i = 0; i <= 5; i++) {
    data.push(
      {
        key: i + 1,
        sn: i + 1,
        date: "699",    
        fullName: "cArim lKotun",
        type: "Authentication",
        timestamp:"699",
        description: "Successful Login",
        editable: false,
      }
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
    );
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a onClick={() => navigate("/manage-admin")}>Audit Trail</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a>remove</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Table
        headings={headings}
        data={data}
        title={"Audit Trail"} 
        sortBy={true}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationLog);
