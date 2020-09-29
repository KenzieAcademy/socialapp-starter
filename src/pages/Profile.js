import React from "react";
import Menu from "../components/menu/Menu";
import GetUsers from "../components/getUsers/GetUsers";
import { userIsAuthenticated } from "../redux/HOCs";
import { Link } from "react-router-dom";


class Profile extends React.Component {
  render() {
    let user = this.props.match.params.username
    return (
      <div className="Profile">
        <Menu loggedIn={true} isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>

        <GetUsers all={false} username={user}/>

        <Link to="/deleteUser">Delete User</Link>

      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
