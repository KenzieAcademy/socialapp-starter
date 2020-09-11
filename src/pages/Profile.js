import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
// import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import DataService from "../dataService";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();

    this.state = {
      userdata: {
        username: "",
        aboutme: "",
      },
    };
  }

  getuserdata() {
    this.client.getUser(this.props.match.params.username).then((result) => {
      console.log(result.data);
      this.setState({
        // username: result.data.username,
        // aboutme: result.data.aboutme,
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
        {/* <h3>{this.props.userdata.username}</h3> */}
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
