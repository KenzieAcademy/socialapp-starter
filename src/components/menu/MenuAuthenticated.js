import React from "react";
import { Layout, Menu } from 'antd';

import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";

class MenuAuthenticated extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    const { Sider } = Layout;
    return (

      <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo"> <h1>The QuestBoard</h1> </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" >
        <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" >
        <Link to="/MessageFeed">Message Feed</Link>
        </Menu.Item>
        <Menu.Item key="3" >
        <Link to="/profile/:username">Profile</Link>
        </Menu.Item>
        <Menu.Item key="4" >
        <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
        </Menu.Item>
        <Menu.Item key="5" >
          nav 5
        </Menu.Item>
        <Menu.Item key="6" >
          nav 6
        </Menu.Item>
        <Menu.Item key="7" >
          nav 7
        </Menu.Item>
        <Menu.Item key="8" >
          nav 8
        </Menu.Item>
      </Menu>
    </Sider>
    </Layout>

      // <div className="Menu">
      //   <h1>The QuestBoard</h1>
      //   {this.props.isAuthenticated && (
      //     <div id="menu-links">
      //       <Link to="/MessageFeed">Message Feed</Link>
      //       <Link to="/ContactUs">Contact Us</Link>
      //       <Link to="/" onClick={this.handleLogout}>
      //         Logout
      //       </Link>
      //     </div>
      //   )}
      // </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(MenuAuthenticated);
