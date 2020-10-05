import React from "react";
// imported "antd/dist/antd.css";
import Menu from "../components/menu/Menu";
import UpdateUser from "../components/updateUser/UpdateUser";
import { userIsAuthenticated } from "../redux/HOCs";
import "../components/updateUser/UpdateUser.css";
import DataService from "../dataService"
import Messagefeed from "./Messagefeed";

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
    this.client = new DataService()
  }

  componentDidMount() {
    this.client.getUser(this.props.username)
      .then(response => {
        this.setState({ user: response.data.user })
        //console.log(response)
      })
  }

  render() {
    if (this.state.user.about === "") {
      this.state.user.about = "No information given."
    }

    return (
      <div className="Profile" id="profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div id="left-column">
          <h2>{this.state.user.displayName}</h2>
          <UpdateUser user={this.state.user} />
        </div>
        <div id="right-column">
          <h2>About Me</h2>
          <p>{this.state.user.about}</p>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
