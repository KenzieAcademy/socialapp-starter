import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm"
import { Carousel } from 'antd';
import UserData from "../components/getUsers/getUsers"

class Home extends React.Component {


  render() {
    const contentStyle = {
      height: '160px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#364d79',
    };

    return (
      <div className="Home">

        test etst
        <div className="site-layout-content">


//       </Menu>
//     </Header>
//     <Content style={{ padding: '0 50px' }}>
//       <Breadcrumb style={{ margin: '16px 0' }}>
//         <Breadcrumb.Item> User</Breadcrumb.Item>
//         <Breadcrumb.Item>Register</Breadcrumb.Item>
//         <Breadcrumb.Item>Contact</Breadcrumb.Item>
//       </Breadcrumb>
//       <div className="site-layout-content">
      
//       <h2>Your favorite microblogging platform</h2>
//       <Menu />

        </div>
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <RegistrationForm />
        <UserData />

        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>,
      </div>

    );

  }

}


export default userIsNotAuthenticated(Home);
