import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Spinner from "react-spinkit";
import CreateUser from "../../APIService";
import { withAsyncAction } from "../../redux/HOCs";
import "./RegisterForm.css";

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      displayName: "",
    };

    this.client = new CreateUser();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // On Submit, Register And Log In New User
  handleRegister = (event) => {
    event.preventDefault();
    this.client.registerUser(this.state).then((response) => {
      this.props.login({
        username: this.state.username,
        password: this.state.password,
      });
    });
  };

  render() {
    const { loading, error } = this.props;
    return (
      // <div className="registerForm">
      //   <form id="register-form" onSubmit={this.handleRegister}>
      //     <label htmlFor="username">Username</label>
      //     <input
      //       type="text"
      //       name="username"
      //       autoFocus
      //       required
      //       onChange={this.handleChange}
      //     />

      //     <label htmlFor="displayName">Display Name</label>
      //     <input
      //       type="text"
      //       name="displayName"
      //       required
      //       onChange={this.handleChange}
      //     />

      //     <label htmlFor="password">Password</label>
      //     <input
      //       type="password"
      //       name="password"
      //       required
      //       onChange={this.handleChange}
      //     />
      //     <button type="submit">Sign Up</button>
      //   </form>

      //   {loading && <Spinner name="circle" color="blue" />}
      //   {error && <p style={{ color: "red" }}>{error.message}</p>}
      // </div>

      <Container>
        <Form id="register-form" onSubmit={this.handleRegister}>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type="text"
            name="displayName"
            required
            onChange={this.handleChange}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />

          <Button variant="dark" type="submit">
            Submit
          </Button>
          {loading && <Spinner name="circle" color="blue" />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </Form>
      </Container>
    );
  }
}
export default withAsyncAction("auth", "login")(RegisterForm);
