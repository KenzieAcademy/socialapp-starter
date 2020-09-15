import React from "react";
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
        <p>Page not found for {this.props.location.pathname}</p>
        <Link to="/">Go Home</Link>
      </div>
    );
  }
}

export default NotFound;
