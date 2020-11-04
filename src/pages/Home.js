import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import "../components/assets/stylesheets/Home.css";
import QuoteGenerator from "../components/quoteGenerator/QuoteGenerator";

class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="Container">
          <div className="Home">
            <Menu />
            <h2>Your favorite microblogging platform</h2>
            <LoginForm />
          </div>
          <QuoteGenerator />
        </div>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
