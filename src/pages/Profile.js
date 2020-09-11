import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
<<<<<<< HEAD
// import GetUserPicture from "../components/getUserPicture";
=======
import DataService from "../DataService";
>>>>>>> master

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
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
<<<<<<< HEAD
        {/* <GetUserPicture /> */}
=======
        <button onClick={this.handleDelete}></button>
>>>>>>> master
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
