import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
// import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
<<<<<<< HEAD
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import GetMessage from "../components/getMessages/GetMessages";
=======
import RegistrationForm from "../components/RegistrationForm/RegistrationForm"
import { Layout, Menu, Breadcrumb } from 'antd';
import UserData from "../components/getUsers/getUsers"
>>>>>>> 1d9a066aa5e0488283dc14f7b378615881a23b2a
class Home extends React.Component {

  render() {
    const { Header, Content, Footer } = Layout;
    

    return (
      <div className="Home">
<<<<<<< HEAD
        <GetMessage />
=======
        {/* <Menu /> */}
        {/* <h2>Your favorite microblogging platform</h2> */}
        {/* <LoginForm /> */}
        {/* <RegistrationForm /> */
        
        }
        test etst
        
        <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode='horizontal' defaultSelectedKeys={['2']}>
        <Menu.Item key="1">News</Menu.Item>
        <Menu.Item key="2">Events</Menu.Item>
        <Menu.Item key="3">Login</Menu.Item>

      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item> User</Breadcrumb.Item>
        <Breadcrumb.Item>Register</Breadcrumb.Item>
        <Breadcrumb.Item>Contact</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
      
      <h2>Your favorite microblogging platform</h2>
      <Menu />
      <LoginForm /> 
      <RegistrationForm />

      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
>>>>>>> 25104437bb3f423c9152cbd8f121bdf3bff7dddc
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
<<<<<<< HEAD
        <RegistrationForm />
=======
        <RegistrationForm/>
        <UserData/>
      
>>>>>>> 1d9a066aa5e0488283dc14f7b378615881a23b2a
      </div>
    );

  }

}


export default userIsNotAuthenticated(Home);
