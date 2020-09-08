import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import UpdateUserForm from "../components/updateUserForm/UpdateUserForm";

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      updating: false,
    }
  }

  // updateChange = (event) => {
  //   this.setState((state, props) => {

  //   })
  // }

  render() {
    if (this.state.updating === false) {
      return (
        <div className="Profile">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <h2>Profile</h2>
          <button>Update Profile</button>
        </div>
      );
    } else {
      return (
        <div className="Profile">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <h2>Update Profile</h2>
          <hr />
          <UpdateUserForm />
        </div>
      );
    }
  }
}

export default userIsAuthenticated(Profile);
