import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
// import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import DataService from "../dataService";
import profilepic from "../components/defualtpicture/freeiconlibrary.jpg";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();

    this.state = {
      userdata: {
        username: "",
        displayname: "",
        aboutme: "",
        picture: profilepic,
      },
    };
  }

  profilePicHandler = (event) => {
    console.log(event);
  };

  getuserdata() {
    this.client.getUser(this.props.match.params.username).then((result) => {
      console.log(result.data);
      this.setState({
        username: result.data.user.username,
        displayname: result.data.user.displayName,
        aboutme: result.data.user.aboutme,
        picture: result.data.user.pictureLocation,
      });
    });
  }

  componentDidMount() {
    this.getuserdata();
  }
  //run a get in component did mount

  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <img src={profilepic} alt="profile pic" height={100} width={100} />
        <input type="file" onChange={this.profilePicHandler} />
        <h3>Welcome {this.state.displayname}</h3>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
