import React from "react";
import { Layout, Menu } from 'antd';

import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";
import theQuestBoard from './theQuestBoardIcon.png'

class MenuAuthenticated extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    const { Sider } = Layout;
    return (

      <Layout>
    <Sider className="sider"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        width:"3000px",
      }}
    >
      <div className="logo"> <Link to="/"><img src={theQuestBoard} alt="QuestBoard Logo"/></Link> </div>
      <Menu className="sider" theme="light" mode="inline" defaultSelectedKeys={['1']}>
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
    );
  }
}

export default withAsyncAction("auth", "logout")(MenuAuthenticated);