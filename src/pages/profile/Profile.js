import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import Menu from "../../components/menu/Menu";
import FootNavBar from "../../components/footNavBar/FootNavBar";
import SideBar from "../../components/sideBar/SideBar";
import "./Profile.css";




class Profile extends React.Component {


  render() {
    return (
      <div className="profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />

        <SideBar isAuthenticated={this.props.isAuthenticated} />

        <FootNavBar isAuthenticated={this.props.isAuthenticated} />


      </div>

    );
  }
}

export default userIsAuthenticated(Profile);
