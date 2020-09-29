import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import FetchService from "../FetchService"
import { Card, CardContent, Icon, Image, Button, Form } from 'semantic-ui-react'
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

  handleDeleteUser = (event) => {
    let token = JSON.parse(localStorage.getItem('login')).result.token
    this.props.logout().then(this.client.deleteUser(this.state.user.username, token))

  }
  handleSubmitPhoto = (event) => {
    event.preventDefault()
    let pictureFormData = this.fileUpload(this.state.picture)
    this.client.getUserPicture(this.state.user.username, pictureFormData).then(()=>{
      this.client.getUser(this.props.match.params.username).then((userData)=>{
        this.setState({
          user:userData.user
        })
      })
    })
  }
  onFileChange = event => {
    if (event.target.files === undefined) return
    this.setState({
      picture: event.target.files[0]
    })
  }
  fileUpload(file) {
    let formData = new FormData()
    formData.append("picture", file)
    return formData
  }

  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <Card>
          <Image src={"https://socialapp-api.herokuapp.com"+ this.state.user.pictureLocation} />

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
              <Icon name="user" />
            </a>
          </Card.Content>
        </Card>

        <Form onSubmit={this.handleUpdateUser}>
          <Form.Field>
            <label htmlFor="displayName">Display Name</label>
            <input
              type="text"
              name="displayName"
              autoFocus
              required
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="about">About</label>
            <input
              type="text"
              name="about"
              required
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="primary" onClick={this.handleUpdateUser}>
            Update User
          </Button>

          <Button type="primary" onClick={this.handleDeleteUser}>
            Delete User
          </Button>
        </Form>

        <Form>
          <Form.Field>
            <Button type="primary" onClick={this.handleSubmitPhoto}>
              Submit Photo
            </Button>
            <input
              type="file"
              name="picture"
              required
              onChange={this.onFileChange}
            />
          </Form.Field>
        </Form>
      </div>
    );
  }
}


export default withAsyncAction("auth", "logout")(userIsAuthenticated(Profile));
