import React from "react";
import { connect } from "react-redux";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

import Table from "../../Component/Tables/Table";
export const StakeHolders = (props) => {
  const navigate = useNavigate();

  const headings = [
    { title: "SN", dataIndex: "sn", key: "sn" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "First Name", dataIndex: "firstName", key: "firstName" },
    { title: "Last Name", dataIndex: "lastName", key: "lastName" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Location", dataIndex: "location", key: "location" },
    { title: "Company", dataIndex: "company", key: "company" },
  ];

  const location = [
    "Agege",
    "Alimosho",
    "Apapa",
    "Kosofe",
    "Moshin",
    "lkeja"
  ]

  const data = [];


  for (let i = 0; i <= 5; i++) {
    data.push(
      {
        key: i + 1,
        sn: i + 1,
        date: "1/17/2022",
        phone: "08039383746",
        email: "nnam@gmail.com",
        firstName: "Nnamdi",
        lastName: "Brown",
        company: "LASEPA",
        location: location[Math.floor(Math.random() * (5 + 1))]  ,
        Industry: "Electronics",
        totalReports: "938",
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
      //     company: 'LASRO',
      //     location: 'lkeja',
      //     Industry: 'Electronics',
      //     totalReports: '938',
      //     editable: false
      //   },
    );
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a onClick={() => navigate("/manage-stakeholder")}>manage</a>
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
        title="Manage StakeHolders"
        ADDButton={true}
        link={"/add-stakeholder"}
        menuOptions={menu}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StakeHolders);
