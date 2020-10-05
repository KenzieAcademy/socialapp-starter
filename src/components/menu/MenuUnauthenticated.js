import React from "react";
import { Layout, Menu } from 'antd';
import "./Menu.css";
import { Link } from "react-router-dom";
import theQuestBoard from './theQuestBoardIcon.png'

class MenuUnauthenticated extends React.Component {

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
          }}
        >
          <div className="logo"><Link to="/"><img src={theQuestBoard} alt="QuestBoard Logo" /></Link> </div>
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" >
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" >
              <Link to="/DiceRoller">Dice Roller</Link>
            </Menu.Item>
            <Menu.Item key="3" >
              <Link to="/ContactUs">Contact Us</Link>
            </Menu.Item>

          </Menu>

        </Sider>

      </Layout>
    );
  }
}

export default MenuUnauthenticated;
