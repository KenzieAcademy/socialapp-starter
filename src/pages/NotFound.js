import React from "react";
import { Link } from "react-router-dom";
import Gunslinger from "../components/assets/images/Gunslinger.jpg"

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
        <h1>Looks like you just yeed your last haw!</h1>
        <img className="gunslinger" src={ Gunslinger } alt="Gunslinger"/>
        <h2>Page not found for {this.props.location.pathname}</h2>
        <Link to="/">Go Home</Link>
      </div>
    );
  }
}

export default NotFound;
