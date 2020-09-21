import React from "react";
import Menu from "../components/menu/Menu";
import GetUsers from "../components/getUsers/GetUsers";
import { userIsAuthenticated } from "../redux/HOCs";

class Profile extends React.Component {
  render() {
    let user = this.props.match.params.username
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <GetUsers username={user}/>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
