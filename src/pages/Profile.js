import React from "react";
import { userIsAuthenticated } from "../redux/HOCs";
import DataService from "../services/DataService";
import Menu from "../components/menu/Menu";
import ProfileContent from "../components/profileContent/ProfileContent";
import Button from "react-bootstrap/Button"
import "./Profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
  }
  handleDelete = (e) => {
    e.preventDefault();
    this.client
      .deleteUser()
      .then((payload) => {
        console.log(payload);
        localStorage.clear();
        window.location.reload();
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