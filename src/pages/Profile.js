import React from "react";
import { userIsAuthenticated } from "../redux/HOCs";
import Service from "../services/Service";
import Menu from "../components/menu/Menu"


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.client = new Service();

  }
  handleDelete = (e) => {
    e.preventDefault();
    this.client
      .deleteUser()
      .then((payload) => {
        console.log(payload);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="Body">
        <div className="Profile">
          <Menu userIsAuthenticated={this.props.isAuthenticated} />
          <h2>My Profile</h2>
          <ProfileContent />
          <Button className="DeleteUser" onClick={this.handleDelete}>
            {" "}
          Delete User
        </Button>
        </div>
      </div>
    );
  }
}
export default userIsAuthenticated(Profile);