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
        {/* <Menu isAuthenticated={this.props.isAuthenticated} /> */}
        <h2 style={{ color: "darkblue" }}>Welcome {this.state.displayname}</h2>
        <h1 style={{ color: "darkblue" }}>Profile</h1>
        <img src={profilepic} alt="profile pic" height={100} width={100} class="center" />
        <input type="file" onChange={this.profilePicHandler} />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
