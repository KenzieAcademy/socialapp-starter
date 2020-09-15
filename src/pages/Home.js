import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import { Pane, Button } from "evergreen-ui"

class Home extends React.Component {
  
  render() {
    return (

      <Pane background="tealTint" padding={24} className="Home">

        <Menu />
        <h2>Your favorite microblogging platform</h2>
        
        <LoginForm onClick={this.togglePop} />
        
        <hr />
        <RegistrationForm />

      </Pane>
    );
  }
}

export default userIsNotAuthenticated(Home);
