import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
// import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { Layout, Menu, Breadcrumb } from "antd";
import UserData from "../components/getUsers/getUsers";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    const { Header, Content, Footer } = Layout;

    return (
      <div className="Home">
        {/* <Menu /> */}
        {/* <h2>Your favorite microblogging platform</h2> */}
        {/* <LoginForm /> */}
        {/* <RegistrationForm /> */}
       
        <Layout className="layout">


          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">News</Menu.Item>
              <Menu.Item key="2">Events</Menu.Item>
              
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>

            <div className="site-layout-content">
              <h2>is this working now!!!!</h2>
              <Menu />
              <LoginForm />
              <Link to="/register"><p>Register</p></Link>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Mix&Mingle
          </Footer>
        </Layout>

        <Menu />
        <h2>Random list of users</h2>
        <UserData />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
