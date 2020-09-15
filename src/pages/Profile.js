import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import UpdateUserForm from "../components/updateUserForm/UpdateUserForm";
import DataService from "../DataService";

class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
      displayName: '',
      about: ''
    }
    
    this.client = new DataService()
  }

  // Working on displaying the logged in user's data on the profile page.
  getUserData() {
    return this.client.getUser().then(result => {
      this.setState({
        user: result.user[0]
      })
    })
  }

  componentDidMount() {
    this.getUserData()
  }

  render() {
    const loginData = JSON.parse(localStorage.getItem('login')).result
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <h4>Username: {loginData.username}</h4>
        <h4>Display Name: {this.state.user.displayName}</h4>
        <hr />
        <UpdateUserForm />
      </div>
    );
  }

}

export default userIsAuthenticated(Profile);
