import React from "react";
import LoginForm from "../loginForm/LoginForm";
import Menu from "../menu/Menu";
import { userIsNotAuthenticated } from "../../redux/HOCs";
import RegistrationForm from "../registrationForm/RegistrationForm";
import "./home.css"


class Home extends React.Component {
    render() {
        return (
            <div>
            <div className="Home">
                <Menu />
            </div>
        );
    }
}

export default userIsNotAuthenticated(Home);
