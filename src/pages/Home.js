import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import Menu from "../components/Menu/Menu";
import Layout from '../components/Layout'
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

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
