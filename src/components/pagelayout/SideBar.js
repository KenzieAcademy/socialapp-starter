import React from "react";

import SubMenu from "antd/lib/menu/SubMenu";
import Icon from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import { Link, Route } from "react-router-dom";
import { SettingOutlined } from "@ant-design/icons";

const { Sider } = Layout;

class SideBar extends React.Component {
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
                <span>User</span>
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
              <Menu.Item key="location3">
                <Route>
                  <Link to="/createmessage">Create Message</Link>
                </Route>
              </Menu.Item>
              <Button>
                {" "}
                <SettingOutlined /> Logout
              </Button>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
export default SideBar;
