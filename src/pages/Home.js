import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import Layout from '../components/Layout'
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import SendPost from "../components/sendPost/SendPost"

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <div className="Home">
          <Menu />
          <h2>Your favorite microblogging platform</h2>
          <LoginForm />
          <hr/>
          <RegistrationForm />
        </div>
        <SendPost></SendPost>
      </Layout>
      
    );
  }
}

export default userIsNotAuthenticated(Home);
