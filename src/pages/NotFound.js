import React from "react";
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import image from "../assets/images/404image2.jpg";
import "./NotFound.css";

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
        <p>Page not found for {this.props.location.pathname}</p>
        <Link to="/">Go Home</Link>
        <img src={image} alt="404page" width={700} />
      </div>
    );
  }
}

export default NotFound;
