import React from "react";
import { Link } from "react-router-dom";
import "../pages/NotFound.css";

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFoundpageBody">
        <div className="NotFound">
          <p>Not Found: {this.props.location.pathname}</p>
          <div className="Link">
            <Link to="/">Go Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
