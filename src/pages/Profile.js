import React from "react";
import Menu from "../components/menu/Menu";
import { Link } from "react-router-dom";
import { userIsAuthenticated } from "../redux/HOCs";
import { Button } from "antd";
import DataService from "../services/DataService/DataService";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.match.params.username,
      user: {},
      userImg: "",
    };

    this.client = new DataService();
  }
  deleteUser = (event) => {
    event.preventDefault();
    this.client.deleteUser(this.state.username).then((result) => {
      localStorage.clear();
      window.location.reload();
    });
  };

  componentDidMount() {
    this.client.getUserPicture(this.state.username).then((result) => {
      this.setState({
        userImg: result.config.url,
      });
    });
    return this.client.getUser(this.state.username).then((result) =>
      this.setState({
        user: result.data.user,
      })
    );
  }

  render() {
    if (this.state.user.displayName === undefined) {
      return (
        <div className="loading">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <h1>Loading Please Wait!</h1>
        </div>
      );
    }
    let currentUser = JSON.parse(localStorage.getItem("login")).result;
    let showStatus = "hide";
    if (this.state.username === currentUser.username) {
      showStatus = "";
    }

    let profileImg =
      "https://cdn.pixabay.com/photo/2012/11/05/07/51/ice-crystal-64157_960_720.jpg";
    if (this.state.userImg) {
      profileImg = this.state.userImg;
    }

    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div className="profilespace">
          <h2>Profile:</h2>
          <div>
            <h1>{this.state.user.displayName} </h1>
            <img
              className="profilePic"
              src={profileImg}
              alt="No Profile found :("
            />
            <br />
            <Link className={showStatus} to="/profilePictureUpdate">
              <button> Change Profile Picture</button>
            </Link>
          </div>
          <div>
            <h1>About Me Section Below:</h1>
            <p>{this.state.user.about}</p>
          </div>
          <Link className={showStatus} to="/profileUpdate">
            <button> Update Profile</button>
          </Link>
          <button
            id="deleteUserButton"
            className={showStatus}
            onClick={this.deleteUser}
          >
            Delete User
          </button>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
