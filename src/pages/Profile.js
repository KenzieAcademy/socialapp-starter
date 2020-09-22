import React from "react";
import Menu from "../components/menu/Menu";
import Userspic from "../components/usersPic/UsersPic"
import { userIsAuthenticated } from "../redux/HOCs";
import cowboy3 from "../components/assets/images/cowboy3.png";
import cowboy4 from "../components/assets/images/cowboy4.png";
import cowgirl1 from "../components/assets/images/cowgirl1.png";


class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <Userspic />
        <h2>Profile</h2>
        <img className="cowboy3" src={cowboy3} alt="cowboy3" />
        <img className="cowboy4" src={cowboy4} alt="cowboy4" />
        <img className="cowgirl1" src={cowgirl1} alt="cowgirl1" />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
