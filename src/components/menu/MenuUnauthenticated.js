import React from "react";
import { Layout, Menu } from 'antd';
import "./Menu.css";
import { userIsNotAuthenticated } from "../../redux/HOCs";
import { Link } from "react-router-dom";


class MenuUnauthenticated extends React.Component {
  
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
        <Link to="/ContactUs">Contact Us</Link>
        </Menu.Item>
        <Menu.Item key="3" >
        nav 3
        </Menu.Item>
        <Menu.Item key="4" >
        nav 4
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
    );
  }
}

export default userIsNotAuthenticated(MenuUnauthenticated);
