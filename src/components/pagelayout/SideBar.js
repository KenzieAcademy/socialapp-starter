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
              <Link to="/"> 🎭 Profile</Link>
            </Route>
          </Menu.Item>
          <SubMenu
            title={
              <span>
                <Icon type="mail" />
                <span>👇 User Info</span>
              </span>
            }
          >
            <Menu.ItemGroup key="AboutUS">
              <Menu.Item key="location1">
                <Route>
                  <Link to="/messagefeed">📩 MessageFeed</Link>
                </Route>
              </Menu.Item>
              <Menu.Item key="location2">
                <Route>
                  <Link to="/createmessage">✍ Create Message</Link>
                </Route>
              </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="mail1" />
                    <span> 👇 More Options</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="AboutUS1" title="More Options">
                  <Menu.Item key="location3">
                    <Route>
                      <Link to="/editprofile"> 🎭 Edit Profile</Link>
                    </Route>
                  </Menu.Item>
                  <Menu.Item key="location5">
                    <Link to="/deleteprofile" onClick={this.handleChange}>
                      {" "}
                      ❎ Delete Profile
                    </Link>
                  </Menu.Item>

                  {/* <Menu.Item key="location3">
                    <Route>
                      <Link to="/editprofile"> 🎭 Edit Profile</Link>
                    </Route>
                  </Menu.Item> */}
                </Menu.ItemGroup>
              </SubMenu>

              {/* <Menu.Item key="location4">
                <Route>
                  <Link to="/searchuser">⌛ Search User</Link>
                </Route>
              </Menu.Item>
              <Menu.Item key="DeleteUser">
                <Route>
                  <Link to="/deleteprofile"> ❎ Delete profile</Link>
                </Route>
              </Menu.Item> */}
              {/* <Menu.Item
                id="menu-links"
                style={{ backgroundColor: "red", borderRadius: "50px" }}
              >
                <Link to="/" onClick={this.handleLogout}>
                  <SettingOutlined /> LOGOUT
                </Link>
              </Menu.Item> */}
              {/* <div className="Menu">
                {this.props.isAuthenticated && (
                  <div id="menu-links">
                    <Link to="/" onClick={this.handleLogout}>
                      Logout
                    </Link>
                  </div>
                )}
              </div> */}
            </Menu.ItemGroup>
          </SubMenu>

          <Menu.Item key="location4">
            <Route>
              <Link to="/searchuser">⌛ Search User</Link>
            </Route>
          </Menu.Item>

          <Menu.Item
            id="menu-links"
            style={{ backgroundColor: "red", borderRadius: "50px" }}
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
