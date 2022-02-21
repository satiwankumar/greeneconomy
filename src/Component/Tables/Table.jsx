import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
// import logo from './logo.svg';
import "./Table.css";
import "antd/dist/antd.css";
import { Table, Button, Tag, Space, Menu, Modal, Input, Dropdown } from "antd";

// import Header from '../../Component/Tables/TableHeaders'
import { Row, Col, Divider } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const App = ({
  headings,
  data,
  title,
  menuOptions,
  ADDButton = false,
  link,
  filters = false,
  sortBy = false,
  filtermenuOptions,
  history,
}) => {
  const { Column, ColumnGroup } = Table;
  const navigate = useNavigate();

  const [displayActions, setDisplayActions] = useState(false);
  const [actionKey, setActionKey] = useState("");
  const renderActions = (record) => record.key === actionKey;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // const menu = (
  //   <Menu>
  //     {
  //       menuOptions.length > 0 && menuOptions.map((item) => (
  //         <>
  //           <Menu.Item key={item.key}>

  //             <a onClick={() => showModal()} >{item.title}</a>

  //           </Menu.Item>

  //           {/* <Menu.Divider /> */}
  //         </>
  //       ))
  //     }

  //   </Menu>
  // );

  const filterMenu = (
    <Menu>
      <Menu.Item key={1}>
        <a>last 7 days </a>
      </Menu.Item>
      <Menu.Item key={2}>
        <a>last 1 month</a>
      </Menu.Item>{" "}
      <Menu.Item key={3}>
        <a>Custom Calendar </a>
      </Menu.Item>
    </Menu>
  );

  const filterMenu1 = (
    <Menu>
      <Menu.Item key={1}>
        <a>Authentication Log </a>
      </Menu.Item>
      <Menu.Item key={2}>
        <a>Session Log</a>
      </Menu.Item>{" "}
      <Menu.Item key={3}>
        <a>Activity Log</a>
      </Menu.Item>
    </Menu>
  );

  const filterMenu2 = (
    <Menu>
      <Menu.Item key={1}>
        <a>Last 24 hours </a>
      </Menu.Item>
      <Menu.Item key={1}>
        <a>last 7 days </a>
      </Menu.Item>
      <Menu.Item key={2}>
        <a>last 1 month</a>
      </Menu.Item>{" "}
      <Menu.Item key={3}>
        <a>Choose Calendar </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        {title && (
          <div>
            <h1 className="heading"> {title}</h1>
          </div>
        )}

        {ADDButton && (
          <div>
            <Button onClick={() => navigate(`${link}`)}>Add</Button>
          </div>
        )}
        {filters && (
          <Dropdown overlay={filterMenu} trigger={["click"]}>
            <a
              className="ant-dropdown-link drop-link"
              onClick={(e) => e.preventDefault()}
            >
              Filter
              <CaretDownOutlined />
            </a>
          </Dropdown>
        )}

        {sortBy && (
          <>
            <Dropdown overlay={filterMenu1} trigger={["click"]}>
              <a
                className="ant-dropdown-link drop-link "
                onClick={(e) => e.preventDefault()}
              >
                SortBy
                <CaretDownOutlined />
              </a>
            </Dropdown>
            <Dropdown overlay={filterMenu2} trigger={["click"]}>
              <a
                className="ant-dropdown-link drop-link"
                onClick={(e) => e.preventDefault()}
              >
                SortBy
                <CaretDownOutlined />
              </a>
            </Dropdown>
          </>
        )}
      </div>
      <hr />

      <Table
        dataSource={data}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
      >
        {headings?.map((heading) => (
          <Column
            title={heading.title}
            dataIndex={heading.dataIndex}
            key={heading.key}
          />
        ))}

        {menuOptions && (
          <Column
            title="Action"
            key="action"
            render={(text, record) => {
              const displayActions = renderActions(record);
              return (
                <Dropdown overlay={menuOptions} trigger={["click"]}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <CaretDownOutlined />
                  </a>
                </Dropdown>
              );
            }}
          />
        )}
      </Table>
    </>
  );
};
export default App;
