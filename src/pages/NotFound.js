import React from "react";
import { Link } from "react-router-dom";
import Error from "../assets/cat404.gif";


class NotFound extends React.Component {
  render() {
    return (
      <div>
      <div className="NotFound">
        <img src={Error} alt="404 page"/>
       
        <Link to="/">Find Home</Link>
      
      </div>
      </div>
    );
  }
}

export default NotFound;
// {this.props.location.pathname}