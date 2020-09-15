import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import Menu from "../components/menu/Menu";
import { Avatar } from 'antd';
import { userIsAuthenticated } from "../redux/HOCs";
import { UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';


class Profile extends React.Component {
  render() {

    const { Header, Content, Footer} = Layout;

    const header= {
      backgroundColor: '#73d13d',
      textAlign: 'center',
      margin: 'auto',
      border: '0',
      fontSize: '50px',
      padding: '30px',
      fontFamily: 'fantasy',
    }

    const content = {
      backgroundColor: '#fffb8f',
      padding: '50px 0'
    }

    const card = {
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      maxWidth: '300px',
      fontFamily: 'Arial',
      margin: 'auto',
      textAlign: 'center',
      fontFamily: 'arial',
      backgroundColor: 'ffffff',

    }

    const avatar = {
      backgroundColor: '#e6f7ff',
      height: '110px'
      
    }

    const user = {
      username: 'Username',
      displayName: 'Display Name',
      about: 'Kenzie Student',
      createdAt: 'Mar-09-2020',
      updatedAt: 'Today',
      pictureLocation: 'sample location',
      googleId: 'google',
     

    }

    const button = {
      border: 'none',
      outline: '0',
      display: 'inline-block',
      padding: '8px',
      color: 'white',
      backgroundColor: '#000',
      textAlign: 'center',
      cursor: 'pointer',
      width: '94%',
      height: '60px',
      fontSize: '18px',
    }

      const footer = {
        backgroundColor: '#73d13d',
      }

    return (
      <>
        <Layout>
          <Header style={header} className="header">
            Rioters Reinvented
          </Header>
          <Content style={content} className="content">
            <div style={card} className="Profile">
              <div style={avatar} className="avatar">
                <Avatar shape="square" size={130} icon={<UserOutlined />} />
               </div>
              <p>{user.username}</p>
              <p>{user.about}</p>
              <p>{user.createdAt}</p>
              <div style={button} className="Button">
                <button>Message</button>
              </div>
            </div>
          </Content>
          <Footer style={footer} className="footer">
          <Menu isAuthenticated={this.props.isAuthenticated} />
            <p>Menu</p>
            <p>Profile Page</p>
            <p>Quiz</p>
            <p>Log Out</p>
          </Footer>
        </Layout>
      </>
    );
  }
}



export default userIsAuthenticated(Profile);