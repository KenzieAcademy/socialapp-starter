import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import Menu from "../components/menu/Menu";
import ProfileCard from '../components/profileCard/ProfileCard'
import { Avatar } from 'antd';
import { userIsAuthenticated } from "../redux/HOCs";
import { UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import DataService from "../dataService"


const Profile = props => {
  
  const { Header, Content, Footer } = Layout;
  
  const header = {
    backgroundColor: '#73d13d',
    textAlign: 'center',
    margin: 'auto',
    border: '0',
    fontSize: '50px',
    padding: '30px',
    fontFamily: 'fantasy',
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
          <ProfileCard username={props.username}/>

          <Footer style={footer} className="footer">
            <Menu isAuthenticated={props.isAuthenticated} />
            <p>Menu</p>
            <p>Profile Page</p>
            <p>Quiz</p>
            <p>Log Out</p>
          </Footer>
        </Layout>
      </>
    );
}

export default userIsAuthenticated(Profile);