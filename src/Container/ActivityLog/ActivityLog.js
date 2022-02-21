import React from "react";
import { connect } from "react-redux";

import { Menu } from "antd";
import Table from "../../Component/Tables/Table";
import { useNavigate } from "react-router-dom";

 const ActivityLog = (props) => {
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
     
    );
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a onClick={() => navigate("/manage-admin")}>Activity Log</a>
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
        title={"Activity Log"} 
        sortBy={true}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityLog);
