import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
        <p>Page not found for {this.props.location.pathname}</p>
        <img className="logo" src="https://sequencing.roche.com/content/dam/rochesequence/worldwide/global/404.png"/>
        <Link to="/">Go Home</Link>
      </div>
    );
  }
}

export default NotFound;
