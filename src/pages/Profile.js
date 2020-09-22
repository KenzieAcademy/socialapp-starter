import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import FetchService from "../FetchService"
import { Card, CardContent, Icon, Image } from 'semantic-ui-react'
import { withAsyncAction } from "../redux/HOCs";
// import imageProfile from "../imageProfile/profile.jpg"


class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.client = new FetchService()

    this.state = {
      formData: {
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

  componentDidMount() {
    this.client.getUser(this.props.match.params.username).then((userData) => {
      this.setState(userData)
    })
  }

  handleChange = event => {
    const newformData = { ...this.state.formData };
    newformData[event.target.name] = event.target.value;

    this.setState({ formData: newformData });
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

  handleDeleteUser = event => {
    event.preventDefault()
    this.props.logout() 
    this.client.deleteUser(this.state.user.username)
    
  }

  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <Card> 
          <Image src='https://images.pexels.com/photos/2846814/pexels-photo-2846814.jpeg?cs=srgb&dl=pexels-oziel-g%C3%B3mez-2846814.jpg&fm=jpg' wrapped ui={false} />

          <Card.Content>
            <Card.Header> {this.state.user.displayName}</Card.Header>
            <Card.Description>{this.state.user.about}</Card.Description>

            {/* <h3>User Name: {this.state.user.username}</h3> */}
            {/* <h3>Display Name: {this.state.user.displayName}</h3> */}
            {/* <h3>About: {this.state.user.about}</h3> */}
            <img />
          </Card.Content>

          <Card.Content extra>
            <a>
              <Icon name= "user"/>
            </a>
          </Card.Content>
        </Card>

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

          <button type="primary"  onClick={this.handleDeleteUser}>
            Delete User
          </button>
        </form>
      </div>
    );
  }
}


export default withAsyncAction("auth", "logout")(userIsAuthenticated(Profile));
