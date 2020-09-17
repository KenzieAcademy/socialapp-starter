import React from "react";
import Spinner from "react-spinkit";
import "./RegistrationForm.css";
import dataService from "../../services/DataService";
import { Form, Button } from "semantic-ui-react";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      displayName: "",
      password: "",
    };

    this.client = new dataService();
  }

  handleRegistration = (e) => {
    e.preventDefault();
    this.client.registerUser(this.state).then((result) => {
      console.log(result.data);
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="RegistrationForm">
        <Form id="registration-form" onSubmit={this.handleRegistration}>
          <Form.Field>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              autoFocus
              required
              onChange={this.handleChange}
            />
          </Form.Field>
          {/* Inserted Display Name */}
          <Form.Field>
            <label htmlFor="displayName">Display Name</label>
            <input
              type="text"
              name="displayName"
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
          <Button type="submit" disabled={loading}>
            Register
          </Button>
        </Form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default RegistrationForm;
