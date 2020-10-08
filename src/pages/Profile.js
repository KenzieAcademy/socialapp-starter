import React from "react";
import { userIsAuthenticated } from "../redux/HOCs";
// import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import DataService from "../dataService";
import profilepic from "../components/defualtpicture/freeiconlibrary.jpg";
// import PSM from "../components/message/UserSearchMessages/PSM";
import "./Profile.css";

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
      console.log(this.client.getUsername());
      console.log(result.data.user.pictureLocation);
      this.setState({
        username: result.data.user.username,
        displayname: result.data.user.displayName,
        aboutme: result.data.user.aboutme,
        picture: `https://socialapp-api.herokuapp.com/users/${this.client.getUsername()}/picture`,
      });
      if (result.data.user.pictureLocation === null) {
        this.setState({
          picture: profilepic,
        });
      } else
        this.setState({
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
        <h2
          style={{
            color: "crystal black",
            textAlign: "center",
            fontFamily: "fantasy",
            fontStyle: "italic",
            fontSize: "40px",
          }}
        >
          🆆🅴🅻🅲🅾🅼🅴 {this.state.displayname}
        </h2>
        <h1
          style={{
            color: "crystal black",
            textAlign: "center",
            fontFamily: "fantasy",
            fontSize: "40px",
          }}
        >
          🅿🆁🅾🅵🅸🅻🅴
        </h1>
        <img
          src={this.state.picture}
          alt="profile pic"
          height={250}
          width={250}
          className="center"
        />
        {/* <PSM /> */}
        {/* <p> {this.state.aboutme}</p>
        <input style={{ fontFamily: "serif" }} type="file" onChange={this.profilePicHandler} /> */}
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
