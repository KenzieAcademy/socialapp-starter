import React from "react";
import './Profile.css';
import Menu from "../../components/menu/Menu";
import SideBar from "../../components/sideBar/SideBar";
import { userIsAuthenticated } from "../../redux/HOCs";
import SideBar from '../../components/sideBar/SideBar';

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">

        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
<<<<<<< HEAD
       <SideBar /> 
=======
        <SideBar />

>>>>>>> 432be30d4b443b0b1df72ec53843318c5fa40571
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
