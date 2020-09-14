import React from "react";
import { Layout } from 'antd';
import LoginForm from "../components/loginForm/LoginForm";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm"
import MenuUnauthenticated from "../components/menu/MenuUnauthenticated";
import { userIsNotAuthenticated } from "../redux/HOCs";



class Home extends React.Component {
  
  render() {
    const { Header, Content, Footer } = Layout;

    return (
    <Layout>
    <MenuUnauthenticated />
    <Layout className="site-layout" style={{ marginLeft: 190 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        <h2>Quests will appear here!</h2>
        <LoginForm />
        <hr />
        <RegistrationForm />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
    );
  }
}

export default userIsNotAuthenticated(Home);
