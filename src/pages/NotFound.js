import React from "react";
import { Link } from "react-router-dom";
import "../pages/NotFound.css";

class NotFound extends React.Component {
  render() {
    return (
      <div className="Body">
        <div className="NotFound">
          <p>Page not found for {this.props.location.pathname}</p>
          <Link to="/">Go Home</Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
