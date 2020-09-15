import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import Menu from "../components/menu/Menu";
import Feed from "../components/feed/Feed"
import { userIsNotAuthenticated } from "../redux/HOCs";
import Layout from '../components/layout'

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
       </Layout>
    );
  }
}

export default userIsNotAuthenticated(Home);
