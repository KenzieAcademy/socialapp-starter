import React from "react";
import { userIsAuthenticated } from "../redux/HOCs"
import DataService from "../services/DataService";
import Menu from "../components/menu/Menu"


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
      <div className="Profile">

        <Menu />
        <h2>Profile</h2>
        <button onClick={this.handleDelete}> Delete User</button>



      </div>
    );
  }
}
export default userIsAuthenticated(Profile);