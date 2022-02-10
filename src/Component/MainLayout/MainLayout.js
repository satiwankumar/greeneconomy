import React, { useEffect, useState } from "react";
import { Layout, Menu, Badge, Input } from "antd";
import {
  ClockCircleFilled,
  DashboardOutlined,
  AreaChartOutlined,
  SettingFilled,
  SearchOutlined,
  NotificationFilled,
  BellFilled,
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

  return (
    <Layout className="main-layout">
      <Header className="header">
        <div className="logo" style={{ marginLeft: !collapse ? "15%" : 0 }}>
          <img src={logoIcon} height={40} alt="" />
        </div>
        <Input prefix={<SearchOutlined />} />
        <div className="data-panel" onClick={() => setShowPanel(true)}>
          Open Data Panel
        </div>
        <div className="header-right">
          <Badge size="small" count={3} color={""}>
            <BellFilled className="bell-icon" />
          </Badge>
          <div className="profile-image-wrap">
            <img src={userProfile} alt="" />
          </div>
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
            <Menu.Item
              onClick={() => navigate("/location-map")}
              key={"Location Inteligence"}
              icon={<IoLocationSharp />}
            >
              Location Inteligence
            </Menu.Item>
            <Menu.Item
            onClick={() => navigate("/users")}
            key={"Users Managment"} icon={<FaUser />}>
              Users Managment
            </Menu.Item>
            <Menu.Item
            onClick={() => navigate("/project-managment")}
            
            key={"Project Managment"} icon={<RiFileSettingsLine />}>
              Project Managment
            </Menu.Item>
            <Menu.Item key={"My Personal Notes"} icon={<GiNotebook />}>
              My Personal Notes
            </Menu.Item>
            <Menu.Item key={"My Reminders"} icon={<ClockCircleFilled />}>
              My Reminders
            </Menu.Item>
            <Menu.Item key={"Team Collaboration"} icon={<FaUsersCog />}>
              Team Collaboration
            </Menu.Item>
            <Menu.Item
            onClick={() => navigate("/investors")}
            
            key={"Manage Investors"} icon={<FaUserTie />}>
              Manage Investors
            </Menu.Item>
            <Menu.Item
             onClick={() => navigate("/stake-holders")}
            key={"Manage Stakeholders"} icon={<FaUsers />}>
              Manage Stakeholders
            </Menu.Item>
            <Menu.Item
             onClick={() => navigate("/admins")}
            
            key={"Manage Admins"} icon={<RiAdminFill />}>
              Manage Admins
            </Menu.Item>
            <Menu.Item key={"General Settings"} icon={<SettingFilled />}>
              General Settings
            </Menu.Item>
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
