import React from "react";

import SubMenu from "antd/lib/menu/SubMenu";
import Icon from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import { Link, Route } from "react-router-dom";
import { SettingOutlined } from "@ant-design/icons";
import { withAsyncAction } from "../../redux/HOCs";
import "../menu/Menu.css";

const { Sider } = Layout;

class SideBar extends React.Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <Sider style={{ backgroundColor: "dark" }}>
        <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
          <Menu.Item key="Dashboard">
            <Route>
              <Link to="/">
                {" "}
                <span role={"img"}>🎭 Profile </span>
              </Link>
            </Route>
          </Menu.Item>
          <SubMenu
            title={
              <span>
                <Icon type="mail" />
                <span role={"img"}>👇 User Info</span>
              </span>
            }
          >
            <Menu.ItemGroup key="AboutUS">
              <Menu.Item key="location1">
                <Route>
                  <Link to="/messagefeed">
                    <span role={"img"}>📩 MessageFeed>/</span>
                  </Link>
                </Route>
              </Menu.Item>
              <Menu.Item key="location2">
                <Route>
                  <Link to="/createmessage">
                    <span role={"img"}>✍</span>Create Message
                  </Link>
                </Route>
              </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="mail1" />
                    <span role={"img"}> 👇 More Options</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="AboutUS1" title="More Options">
                  <Menu.Item key="location3">
                    <Route>
                      <Link to="/editprofile">
                        <span role={"img"}> 🎭</span> Edit Profile
                      </Link>
                    </Route>
                  </Menu.Item>
                  <Menu.Item key="location5">
                    <Link to="/deleteprofile" onClick={this.handleChange}>
                      {" "}
                      <span role={"img"}>❎</span> Delete Profile
                    </Link>
                  </Menu.Item>

                  {/* <Menu.Item key="location3">
                    <Route>
                      <Link to="/editprofile"> 🎭 Edit Profile</Link>
                    </Route>
                  </Menu.Item> */}
                </Menu.ItemGroup>
              </SubMenu>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="location4">
            <Route>
              <Link to="/searchuser">
                <span role={"img"}>⌛</span> Search User
              </Link>
            </Route>
          </Menu.Item>
          <Menu.Item
            id="menu-links"
            style={{
              backgroundColor: "red",
              borderRadius: "50px",
              textAlign: "center",
            }}
          >
            <Link to="/" onClick={this.handleLogout}>
              <SettingOutlined /> LOGOUT
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
export default withAsyncAction("auth", "logout")(SideBar);
