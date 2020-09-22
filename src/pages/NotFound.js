import React from "react";
import { Link } from "react-router-dom";
import Error from "../assets/404.gif";


class NotFound extends React.Component {
  render() {
    return (
      <div>
      <div className="NotFound">
       <img src={Error} alt="404 page"/>
       
       <h1> <Link to="/">Home</Link></h1>
      
      </div>
      </div>
    );
  }
}

export default NotFound;
// {this.props.location.pathname}