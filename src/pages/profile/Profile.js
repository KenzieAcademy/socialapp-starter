import React from "react";
import './Profile.css';
import Menu from "../../components/menu/Menu";
import SideBar from "../../components/sideBar/SideBar";
import { userIsAuthenticated } from "../../redux/HOCs";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <SideBar />

      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
