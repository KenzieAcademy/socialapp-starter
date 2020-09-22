import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
        <img src="https://i.postimg.cc/Hn2XSWKg/404rick.png" alt="404 img" />
        <p>Page not found for {this.props.location.pathname}</p>
        <Link to="/">Go Home</Link>
      </div>
    );
  }
}

export default NotFound;
