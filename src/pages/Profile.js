import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import FetchService from "../FetchService"

class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.client = new FetchService()

    this.state = {
      formData:{
        displayName: "",
        about: "",
        password: ""
      },
  
  "user": {
    "pictureLocation": null,
    "username": "null",
    "displayName": "null",
    "about": "null",
    "googleId": null,
    "createdAt": "null",
    "updatedAt": "null",

  },
  "statusCode": null
}
  }

  componentDidMount(){
    this.client.getUser(this.props.match.params.username).then((userData)=>{
      this.setState(userData)
    })
  }

  handleChange = event => {
    const newformData = { ...this.state.formData };
    newformData[event.target.name] = event.target.value;

    this.setState({ formData: newformData});
  };

  handleUpdateUser = event => {
    event.preventDefault()
    this.client.updateUser(this.state.user.username, this.state.formData)
      .then(updateUserData => {
        this.setState({
          user: updateUserData.user
        })
      })
  }

  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <h3>User Name: {this.state.user.username}</h3>
        <h3>Display Name: {this.state.user.displayName}</h3>
        <h3>About: {this.state.user.about}</h3>
        <img/>

        <form id="Profile-form" onSubmit={this.handleUpdateUser}>
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            name="displayName"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <br/>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <br/>
          <label htmlFor="about">About</label>
          <input
            type="textarea"
            name="about"
            required
            onChange={this.handleChange}
          />
          <button type="primary"  onClick={this.handleUpdateUser}>
            Update User
          </button>
        </form>
      </div>
    );
  }
}


export default userIsAuthenticated(Profile);
