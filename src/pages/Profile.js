import React from "react";
// import "antd/dist/antd.css";
import Menu from "../components/menu/Menu";
import UpdateUser from "../components/updateUser/UpdateUser";
import { userIsAuthenticated } from "../redux/HOCs";
import "../components/updateUser/UpdateUser.css";
import DeleteAccount from "../components/deleteAccount/DeleteAccount";
import DataService from "../dataService"

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {}
    }
    this.client = new DataService()
  }

  UNSAFE_componentDidMount() {
    this.client.getUser(this.props.username)
      .then(response => {
        this.setState({user: response.data.user})
        //console.log(response)
      })
  }
  
  render() {
    return (
      <div className="Profile" id="profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div id="left-column">
        <h2>{this.state.user.displayName}</h2>
          <UpdateUser user={this.state.user} />
        </div>
        <div id="right-column">
          <h2>About Me</h2>
          <p>The component for this user's bio will go here.</p>
          <h2>Messages</h2>
          <p>
            The component for this user's own messages will go here.
            <br />
            They should also be able to post a new message from here too.
          </p>
        </div>
        <DeleteAccount />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
