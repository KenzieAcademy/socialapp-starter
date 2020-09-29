import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import WelcomePage from "../components/welcomePage/WelcomePage";




class Home extends React.Component {
  render() {
    return (
     
      <div>
        <WelcomePage/>
        <Menu />
        <LoginForm />
        <hr/>
        <RegistrationForm />

      </div>
     
      
    );
  }
}
export default userIsNotAuthenticated(Home);
