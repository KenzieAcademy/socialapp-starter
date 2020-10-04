import React from "react";
import DataService from "../../DataService";
import { Card, Form, Input, Button } from "antd";

const FormItem = Form.item;

class UpdateAbout extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
    this.state = {
      isSubmitted: false,
      userData: {
        password: "",
        about: "",
        displayName: "",
      },
      statusCode: 0,
    };
  }

  handleChange = (event) => {
    const userData = { ...this.state.userData };
    userData[event.target.name] = event.target.value;
    this.setState({
      userData,
    });
  };

  handleSubmit = (event) => {
    let loginData = JSON.parse(localStorage.getItem("login"));
    if (event.target.name === "password") {
      let patchData = { password: this.state.userData.password };
      this.client
        .updateAbout(loginData.result.username, patchData)
        .then((res) => console.log(res));
      event.preventDefault();
      console.log(this.state.userData);
      this.setState({
        isSubmitted: true,
      });

      this.setState({
        userData: {
          password: "",
        },
      });
    }
    if (event.target.name === "displayName") {
      let patchData = { displayName: this.state.userData.displayName };
      this.client
        .updateAbout(loginData.result.username, patchData)
        .then((res) => console.log(res));
      event.preventDefault();
      console.log(this.state.userData);
      this.setState({
        isSubmitted: true,
      });

      this.setState({
        userData: {
          displayName: "",
        },
      });
    }
    if (event.target.name === "about") {
      let patchData = { about: this.state.userData.about };
      this.client
        .updateAbout(loginData.result.username, patchData)
        .then((res) => console.log(res));
      event.preventDefault();
      console.log(this.state.userData);
      this.setState({
        isSubmitted: true,
      });

      this.setState({
        userData: {
          about: "",
        },
      });
    }
  };

  render() {
    const FormItem = Form.item;

    return (
      <div className="UpdateAbout">
        <Card style={{ textAlign: "left", width: "50%", margin: "left" }}>
          <form
            id="updateAbout-form-passord"
            className="password"
            name="password"
            onSubmit={this.handleSubmit}
          >
            <Form.Item>
              <label htmlFor="password">Password: </label>
              <input
                type="text"
                name="password"
                required
                value={this.state.userData.password}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <button type="submit">Update Password</button>
            </Form.Item>
          </form>
          <form
            id="updateAbout-form-displayName"
            className="displayName"
            name="displayName"
            onSubmit={this.handleSubmit}
          >
            <Form.Item>
              <label htmlFor="displayName">Display Name: </label>
              <input
                type="text"
                name="displayName"
                required
                value={this.state.userData.displayName}
                onChange={this.handleChange}
              />
              <Form.Item>
                <button type="submit">Update Display Name</button>
              </Form.Item>
            </Form.Item>
          </form>
          <form
            id="updateAbout-form-about"
            className="about"
            name="about"
            onSubmit={this.handleSubmit}
          >
            <Form.Item>
              <label htmlFor="about">About: </label>
              <input
                type="text"
                name="about"
                required
                value={this.state.userData.about}
                onChange={this.handleChange}
              />
              <Form.Item>
                <button type="submit">Update About</button>
              </Form.Item>
            </Form.Item>
          </form>
        </Card>
      </div>
    );
  }
}

export default UpdateAbout;
