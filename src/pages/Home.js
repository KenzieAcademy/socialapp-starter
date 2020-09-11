import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
<<<<<<< HEAD
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import GetMessage from "../components/getMessages/GetMessages";
=======
import RegistrationForm from "../components/RegistrationForm/RegistrationForm"
import UserData from "../components/getUsers/getUsers"
>>>>>>> 1d9a066aa5e0488283dc14f7b378615881a23b2a
class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <GetMessage />
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
