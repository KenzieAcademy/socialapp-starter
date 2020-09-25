import React from "react";
import CreateMessage from "../components/createMessage/CreateMessage";
import Menu from "../components/menu/Menu";
import UserCard from "../components/userCard/UserCard";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageList from "./MessageList";





class Profile extends React.Component {
  render() {
    return (
      
      
      <div className="Profile">
        
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <br />
        <UserCard />
        <br />
        <CreateMessage />
        <MessageList />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
