import React,{useState} from "react";
import { connect } from "react-redux";
import { Menu, Modal, Button, Dropdown, Input, message, Select } from "antd";

import Table from "../../Component/Tables/Table";
export const DataPreference = (props) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
 
  const headings = [
    { title: "SN", dataIndex: "sn", key: "sn" },

    { title: "Date", dataIndex: "date", key: "date" },
    {
      title: "Data Preference Name",
      dataIndex: "DataPreferenceName",
      key: "DataPreferenceName",
    },
    { title: "Assigned to", dataIndex: "AssignedTo", key: "AssignedTo" },
  ];

  const data = [];

  for (let i = 0; i <= 5; i++) {
    data.push(
      {
        key: i + 1,
        sn: i + 1,
        date: "1/17/2022",
        DataPreferenceName: "Recyclers Data Preference",
        AssignedTo: "22 Users",
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
        <a onClick={()=>showModal()}>remove</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a>edit</a>
      </Menu.Item>
    </Menu>
  );
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  
  const handleSucess = (type) => {
    message.success(`User ${type} Successfully`);

    handleOk();

  };

  const handleError = () => {
    // message.error("User Canceled successfully")
    handleOk();

  };

  return (
    <div>
      <Table
        headings={headings}
        data={data}
        title={"Data Preference List"}
        ADDButton={true}
        link={"/manage-data-preference"}
        menuOptions={menu}
      />
       <Modal
        width={450}
        title=""
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="text-center">
          <p className="modal-heading">Are You Sure You Want to Remove?</p>
        </div>
        <div className="modal-btns">
          <button onClick={() => handleError()} className="site-btn  red-btn">
            Cancel
          </button>
          <button
            onClick={() => handleSucess("Removed")}
            className="site-btn white-btn"
          >
            Remove
          </button>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DataPreference);
