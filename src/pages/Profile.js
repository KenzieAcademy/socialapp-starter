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
        <h1 style={{ color: "darkblue" }}>Welcome {this.state.displayname}</h1>
        <h2 style={{ color: "darkblue" }}>Profile</h2>
        <p> {this.state.aboutme}</p>
        <img
          src={this.state.picture}
          alt="profile pic"
          height={100}
          width={100}
          class="center"
        />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
