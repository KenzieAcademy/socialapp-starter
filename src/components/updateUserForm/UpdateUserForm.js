import React from "react";
import Spinner from "react-spinkit";
import "./UpdateUserForm.css";
import DataService from "../../DataService"

class UpdateUserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: "",
      about: "",
      displayName: ""
    };

    this.client = new DataService()

  }

  getUserData() {
    return this.client.getUser().then(result => {
      this.setState({
        data: result.data.user
      })
    })
  }

  componentDidMount() {
    this.getUserData()
  }

  handleUpdateUser = e => {
    e.preventDefault();
    let username = false
        if (JSON.parse(localStorage.getItem('login')).result != null) {
            username = JSON.parse(localStorage.getItem('login')).result.username
        }
    const updateData = {}
    if (this.state.password.length > 7) {
      updateData.password = this.state.password
    }
    if (this.state.about.length > 0) {
      updateData.about = this.state.about
    }
    if (this.state.displayName.length > 2) {
      updateData.displayName = this.state.displayName
    }
    this.client.updateUser(updateData).then(result => {
      if (result.data.statusCode === 200) {
        alert("You have successfully updated your profile")
        window.location.href = "/profile/" + username
      }
    })

  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="UpdateUserForm">
        <h1>Update Profile</h1>
        <h3>All fields are optional</h3>
        <h5>If you would like to update your password you may do it here:</h5>
        <h6><strong>ONLY ENTER TEXT YOU WISH TO BE YOUR NEW PASSWORD
          <br />
          MINIMUM 8 CHARACTERS</strong></h6>
        <form id="updateUser-form" onSubmit={this.handleUpdateUser}>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            autoFocus
            minLength='8'
            maxLength='20'
            onChange={this.handleChange}
          />
          <hr />
          <div>Current Display Name: {this.props.displayName}</div>
          <label htmlFor="displayName">Display Name </label>
          <input
            type="text"
            name="displayName"
            minLength='3'
            maxLength='20'
            onChange={this.handleChange}
          />
          <hr />
          <div>Current About: {this.props.about}</div>
          <label htmlFor="about">About </label>
          <input
            type="text"
            name="about"
            onChange={this.handleChange}
          />
          <hr />
          <br />
          <button type="submit" disabled={loading}>
            Update
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default UpdateUserForm;
