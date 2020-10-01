import React from "react";

import SubMenu from "antd/lib/menu/SubMenu";
import Icon from "@ant-design/icons";
import { Layout, Avatar, Menu, Breadcrumb, Button, message } from "antd";
import Title from "antd/lib/typography/Title";
import { Link, Route } from "react-router-dom";
import { SettingOutlined } from "@ant-design/icons";
import { withAsyncAction } from "../../redux/HOCs";
import "../menu/Menu.css";

const { Header, Footer, Sider, Content } = Layout;

class SideBar extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      // <Sider>
      //   <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
      //     <Menu.Item key="Dashboard">
      //       <Route>
      //         <Link to="/"> Profile</Link>
      //       </Route>
      //     </Menu.Item>
      //     <SubMenu
      //       title={
      //         <span>
      //           <Icon type="mail" />
      //           <span>User</span>
      //         </span>
      //       }
      //     >
      //       <Menu.ItemGroup key="AboutUS" title="About Me">
      //         <Menu.Item key="location1">
      //           <Route>
      //             <Link to="/messagefeed"> MessageFeed</Link>
      //           </Route>
      //         </Menu.Item>
      //         <Menu.Item key="location2">
      //           <Route>
      //             <Link to="/editprofile">Edit Profile</Link>
      //           </Route>
      //         </Menu.Item>
      //       </Menu.ItemGroup>
      //     </SubMenu>
      //   </Menu>
      // </Sider>

      <Sider style={{ backgroundColor: "dark" }}>
        <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
          <Menu.Item key="Dashboard">
            <Route>
              <Link to="/"> Profile</Link>
            </Route>
          </Menu.Item>
          <SubMenu
            title={
              <span>
                <Icon type="mail" />
                <span>User Information</span>
              </span>
            }
          >
            <Menu.ItemGroup key="AboutUS" title="About Me">
              <Menu.Item key="location1">
                <Route>
                  <Link to="/messagefeed"> MessageFeed</Link>
                </Route>
              </Menu.Item>
              <Menu.Item key="location2">
                <Route>
                  <Link to="/editprofile">Edit Profile</Link>
                </Route>
              </Menu.Item>
              <Menu.Item id="menu-links">
                <Link to="/" onClick={this.handleLogout}>
                  <SettingOutlined /> Logout
            </Link>
              </Menu.Item>
              <div className="Menu">
                {this.props.isAuthenticated && (
                  <div id="menu-links">
                    <Link to="/" onClick={this.handleLogout}>
                      Logout
            </Link>
                  </div>
                )}
              </div>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
export default withAsyncAction("auth", "logout")(SideBar);
