import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";


class NotFound extends React.Component {
  render() {
    return (
      <div>
      <div className="ErrorPic">
        
       
       <h1> <Link to="/">Home</Link></h1>
      
      </div>
      </div>
    );
  }
}

export default NotFound;
// {this.props.location.pathname}<img src={Error} alt="404 page"/>