import React from "react";
import "./Menu.css";
import { userIsNotAuthenticated } from "../../redux/HOCs";
import { Link } from "react-router-dom";


class MenuUnauthenticated extends React.Component {
  
  render() {
    return (
      <div className="Menu">
        <h1>The QuestBoard</h1>
        <div id="menu-links">
        <Link to="/">Home</Link>
            <Link to="/ContactUs">Contact Us</Link>
          </div>
      </div>
    );
  }
}

export default userIsNotAuthenticated(MenuUnauthenticated);
