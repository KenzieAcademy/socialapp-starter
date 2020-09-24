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
        password: "string",
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
    let about = {};
    let loginData = JSON.parse(localStorage.getItem("login"));
    this.client
      .updateAbout(loginData.result.username, this.state.userData)
      .then((res) => console.log(res));
    event.preventDefault();
    console.log(this.state.userData);
    this.setState({
      isSubmitted: true,
    });

    this.setState({
      userData: {
        password: "",
        about: "",
        displayName: "",
      },
    });
  };
  componentDidMount() {}

  render() {
    const FormItem = Form.item;

    return (
      <div className="UpdateAbout">
        <Card style={{ textAlign: "left", width: "50%", margin: "left" }}>
          <form id="updateAbout-form" onSubmit={this.handleSubmit}>
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
              <label htmlFor="displayName">Display Name: </label>
              <input
                type="text"
                name="displayName"
                required
                value={this.state.userData.displayName}
                onChange={this.handleChange}
              />
            </Form.Item>

            <Form.Item>
              <label htmlFor="about">About: </label>
              <input
                type="text"
                name="about"
                required
                value={this.state.userData.about}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <button type="submit">Update Profile</button>
            </Form.Item>
          </form>
        </Card>
      </div>
    );
  }
}

export default UpdateAbout;
