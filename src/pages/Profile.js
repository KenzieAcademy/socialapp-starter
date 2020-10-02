import React from "react";
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
        picture: "",
      },
    };
  }

  profilePicHandler = (event) => {
    console.log(event);
  };

  getuserdata() {
    this.client.getUser(this.props.match.params.username).then((result) => {
      console.log(this.client.getUsername());
      this.setState({
        username: result.data.user.username,
        displayname: result.data.user.displayName,
        aboutme: result.data.user.aboutme,
        picture: `https://socialapp-api.herokuapp.com/users/${this.client.getUsername()}/picture`,
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
        <img
          src={this.state.picture}
          alt="profile pic"
          height={120}
          width={120}
          class="center"
        />
        <p> {this.state.aboutme}</p>
        <input style={{ fontFamily: "serif" }} type="file" onChange={this.profilePicHandler} />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
