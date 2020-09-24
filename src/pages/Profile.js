import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
// import PostMessage from '../components/postMessage/PostMessage'
import GetUsers from "../components/getUsers/GetUsers";
// import DeleteMessage from "../components/deleteMessage/DeleteMessage";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        
        <br />
        
        <br />
        <GetUsers />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
