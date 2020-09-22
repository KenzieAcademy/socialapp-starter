import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
        <p>A Mimic ate your page! {this.props.location.pathname}</p>
        <Link to="/">Go Home</Link>
      </div>
    );
  }
}

export default NotFound;
