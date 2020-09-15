import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import UpdateUserForm from "../components/updateUserForm/UpdateUserForm";
import DataService from "../DataService";

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.client = new DataService()
    this.state = {
      data: {}
    }
  }

  getUserData() {
    return this.client.getUser().then(result => {
      this.setState({
        data: result.data
      })
    })
  }

  componentDidMount() {
    this.getUserData()
  }

  render() {
    const loginData = JSON.parse(localStorage.getItem('login')).result
    let displayName = 'loading'
    let about = 'loading'

    if (this.state.data.user) {
      displayName = this.state.data.user.displayName
      about = this.state.data.user.about
    }

    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <h4>Profile Photo: </h4>
        <h4>Username: {loginData.username}</h4>
        <h4>Display Name: {displayName}</h4>
        <h4>About: {about}</h4>
        <hr />
        <UpdateUserForm />
      </div>
    );
  }

}

export default userIsAuthenticated(Profile);
