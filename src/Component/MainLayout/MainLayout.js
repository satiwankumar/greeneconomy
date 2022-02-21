import React, { useEffect, useState } from "react";
import { Layout, Menu, Badge, Input, message, Dropdown,Modal } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

import {
  ClockCircleFilled,
  DashboardOutlined,
  AreaChartOutlined,
  SettingFilled,
  SearchOutlined,
  NotificationFilled,
  BellFilled,
  DatabaseOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import logoIcon from "../../Assets/Images/logo_icon.png";
import lagosIcon from "../../Assets/Images/lagos.png";
import userProfile from "../../Assets/Images/user_profile.png";
import { IoLocationSharp } from "react-icons/io5";
import { FaUser, FaUsersCog, FaUserTie, FaUsers } from "react-icons/fa";
import { RiFileSettingsLine, RiAdminFill } from "react-icons/ri";
import { GiNotebook } from "react-icons/gi";
import DataPanel from "../DataSidePanel/DataSidePanel";

import "./MainLayout.scss";
import { useSelector } from "react-redux";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;


function MainLayout(props) {

  const { confirm } = Modal;

  const navigate = useNavigate();
  const [collapse, setCollapsed] = useState(false);
  const dashboards = useSelector((state) => state.Dashboard.dashboards);
  const location = useLocation();
  const [defaultSelected, setDefaultSelected] = useState(["Overview Stats"]);
  const [defaultOpenedKeys, setDefaultOpenedKeys] = useState([]);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    console.log(location);
    switch (location?.pathname) {
      case "/create-dashboard":
        setDefaultSelected(["create-dashboard"]);
        setDefaultOpenedKeys(["tracking dashboard"]);
        break;
      case "/location-map":
        setDefaultSelected(["Location Inteligence"]);
        setDefaultOpenedKeys([]);
        break;
      case "/":
        setDefaultSelected(["Overview Stats"]);
        setDefaultOpenedKeys([]);
        break;
      case "/tracking-dashboard":
        setDefaultSelected([`${location.state?.selected}`]);
        setDefaultOpenedKeys(["tracking dashboard"]);
        break;
      default:
        setDefaultSelected(["Overview Stats"]);
        setDefaultOpenedKeys([]);
        break;
    }
  }, [location]);

  const handleDataPanel = () => {
    if (
      location?.pathname == "/create-dashboard" ||
      location?.pathname == "/tracking-dashboard"
    ) {
      setShowPanel(true);
    } else {
      message.error("Go to Dashboard for data panel");
    }
  };

  const handleLogout = () => {
    confirm({
      title:
        "Are your sure want to Logout?",
      icon: null,
      okText: "Logout",
      cancelText: "CANCEL",
      onOk() {
       
      },
      className: "chart-confirm-modal",
      onCancel() {
        console.log("Cancel");
      },
      centered: true,
    });
  };


  
  const filterMenu2 = (
    <Menu>
      <Menu.Item key={1}>
        <a >view Profile </a>
      </Menu.Item>
      <Menu.Item key={2}>
        <a onClick={()=>handleLogout()}>Log out</a>
      </Menu.Item>{" "}
     
    </Menu>
  );
  const filterMenu1 = (
    <Menu>
      <Menu.Item key={1}>
        <div className="d-flex">
          <i className="fas mt-2 fa-bell"></i>
          <div>
            <p className="my-0 ml-2">Notifcation text here Lorel ispsum dummy text comes here</p >
            <div className="d-flex align-items-center justify-content-between">
              <p className="p-sm grey-text">Date</p>
              <p className="p-sm grey-text">Time</p>
            </div>
          </div>
        </div>

      </Menu.Item>
     
      <Menu.Item key={2}>
      <a className="d-block text-center">view All</a >

      </Menu.Item>{" "}
    </Menu>
  );

  return (
    <Layout className="main-layout">
      <Header className="header">
        <div className="logo" style={{ marginLeft: !collapse ? "15%" : 0 }}>
          <img src={logoIcon} height={40} alt="" />
        </div>
        <Input prefix={<SearchOutlined />} />
        <div className="data-panel" onClick={() => handleDataPanel()}>
          Open Data Panel
        </div>
        <div className="header-right noti">
          <Dropdown  overlayClassName="notification" overlay={filterMenu1} trigger={["click"]}>
            <a
              className="ant-dropdown-link drop-link "
              onClick={(e) => e.preventDefault()}
            >
              {" "}
              <Badge size="small" count={3} color={""}>
                <BellFilled className="bell-icon" />
              </Badge>
              <CaretDownOutlined />
            </a>
          </Dropdown>

          {/* <div className="profile-image-wrap">
            <img src={userProfile} alt="" />

          </div> */}

          <Dropdown  overlay={filterMenu2} trigger={["click"]}>
            <a
              className="ant-dropdown-link drop-link "
              onClick={(e) => e.preventDefault()}
            >
              {" "}
              <div className="profile-image-wrap">
                <img src={userProfile} alt="" />
              </div>
            </a>
          </Dropdown>
        </div>
      </Header>
      <Layout>
        <Sider
          onCollapse={(collapsed) => setCollapsed(collapsed)}
          collapsible
          width={200}
          className="site-layout-background"
        >
          <div className="logo">
            <img src={lagosIcon} width={200} height={170} alt="" />
          </div>
          <Menu
            mode="inline"
            selectedKeys={defaultSelected}
            openKeys={defaultOpenedKeys}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item
              onClick={() => navigate("/")}
              key={"Overview Stats"}
              icon={<AreaChartOutlined />}
            >
              Overview Stats
            </Menu.Item>
            <SubMenu
              key="tracking dashboard"
              icon={<DashboardOutlined />}
              onTitleClick={() => {
                if (defaultOpenedKeys?.includes("tracking dashboard")) {
                  setDefaultOpenedKeys([]);
                } else {
                  setDefaultOpenedKeys(["tracking dashboard"]);
                }
              }}
              title="Tracking Dashboards"
            >
              <Menu.Item
                key="create-dashboard"
                onClick={() => navigate("/create-dashboard")}
              >
                Create Dashboard
              </Menu.Item>
              {dashboards?.map((dashboard) => {
                return (
                  <Menu.Item
                    key={dashboard?.name}
                    onClick={() =>
                      navigate("/tracking-dashboard", {
                        state: { dashboards, selected: dashboard?.name },
                      })
                    }
                  >
                    {dashboard?.name}
                  </Menu.Item>
                );
              })}
            </SubMenu>

            <SubMenu
              key="Location Inteligence"
              icon={<IoLocationSharp />}
              onClick={() => navigate("/maps")}
              onTitleClick={() => {
                if (defaultOpenedKeys?.includes("Location Inteligence")) {
                  setDefaultOpenedKeys([]);
                } else {
                  setDefaultOpenedKeys(["Location Inteligence"]);
                }
              }}
              title="Location Inteligence"
            >
              <Menu.Item key="create-roles" onClick={() => navigate("/")}>
                Sentiment Map
              </Menu.Item>
              <Menu.Item key="content-manager" onClick={() => navigate("/")}>
                Cicualar Data Map
              </Menu.Item>
              <Menu.Item key="create-dashboard" onClick={() => navigate("/")}>
                Innovation Map
              </Menu.Item>
              <Menu.Item key="create-dashboard">Organic Waste Volume</Menu.Item>
              <Menu.Item key="create-dashboard">E-Waste Volume</Menu.Item>
            </SubMenu>

            <Menu.Item
              onClick={() => navigate("/users")}
              key={"Users Managment"}
              icon={<FaUser />}
            >
              Users Managment
            </Menu.Item>
            <Menu.Item
              onClick={() => navigate("/manage-projects")}
              key={"Project Managment"}
              icon={<RiFileSettingsLine />}
            >
              Project Managment
            </Menu.Item>
            <Menu.Item
              onClick={() => navigate("/data-preference")}
              key={"Project Managment"}
              icon={<DatabaseOutlined />}
            >
              Create and View Data Point
            </Menu.Item>
            <Menu.Item
              onClick={() => navigate("/personal-notes")}
              key={"My Personal Notes"}
              icon={<GiNotebook />}
            >
              My Personal Notes
            </Menu.Item>
            <Menu.Item
              onClick={() => navigate("/my-reminder")}
              key={"My Reminders"}
              icon={<ClockCircleFilled />}
            >
              My Reminders
            </Menu.Item>
            <Menu.Item
              onClick={() => navigate("/team-collaboration")}
              key={"Team Collaboration"}
              icon={<FaUsersCog />}
            >
              Team Collaboration
            </Menu.Item>
            <Menu.Item
              onClick={() => navigate("/investors")}
              key={"Manage Investors"}
              icon={<FaUserTie />}
            >
              Manage Investors
            </Menu.Item>
            <Menu.Item
              onClick={() => navigate("/stake-holders")}
              key={"Manage Stakeholders"}
              icon={<FaUsers />}
            >
              Manage Stakeholders
            </Menu.Item>
            <Menu.Item
              onClick={() => navigate("/admins")}
              key={"Manage Admins"}
              icon={<RiAdminFill />}
            >
              Manage Admins
            </Menu.Item>

            <SubMenu
              key="General Settings"
              icon={<SettingFilled />}
              onTitleClick={() => {
                if (defaultOpenedKeys?.includes("General Settings")) {
                  setDefaultOpenedKeys([]);
                } else {
                  setDefaultOpenedKeys(["General Settings"]);
                }
              }}
              title="General Settings"
            >
              <Menu.Item
                key="create-roles"
                onClick={() => navigate("/role-manager")}
              >
                Role Manager
              </Menu.Item>
              <Menu.Item
                key="content-manager"
                onClick={() => navigate("/content-manager")}
              >
                Content Manager
              </Menu.Item>
              <Menu.Item
                key="create-dashboard"
                onClick={() => navigate("/authentication-log")}
              >
                Authenticatin Log
              </Menu.Item>
              <Menu.Item key="" onClick={() => navigate("/activity-log")}>
                Activity Log
              </Menu.Item>
              <Menu.Item
                onClick={() => navigate("/session-log")}
                key="session-log"
              >
                Session Log
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
      <DataPanel showPanel={showPanel} setShowPanel={setShowPanel} />
    </Layout>
  );
}

export default MainLayout;
