import React from "react";
import Spinner from "react-spinkit";
import "./RegistrationForm.css";
import dataService from "../../services/DataService";
import { Form, Button, Label, Input, Message } from "semantic-ui-react";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: "string",
        displayName: "string",
        password: "string",
      },
      submitted: false,
      responseCode: null,
    };

    this.client = new dataService();
  }

  handleRegistration = (e) => {
    e.preventDefault();
    this.client
      .registerUser(this.state.formData)
      .then((result) => {
        console.log(result);
        this.setState({
          responseCode: 200,
          formData: { username: "", displayName: "", password: "" },
          submitted: true,
        });
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data.statusCode === 400) {
          this.setState({ responseCode: 400 });
        }
      });
  };

  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({ formData: formData });
  };

  handleReset = (event) => {
    this.setState({
      formData: { username: "", displayName: "", password: "" },
      submitted: false,
    });
  };

  render() {
    const { loading, error } = this.props;

    if (this.state.responseCode === 200 && this.state.submitted) {
      return (
        <div className="RegistrationForm">
          <Message
            success
            header="You have Created an Account Successfully!"
            onDismiss={this.handleReset}
          />
        </div>
      );
    }

    if (this.state.responseCode === 400) {
      return (
        <div className="RegistrationForm">
          <Form id="registration-form" onSubmit={this.handleRegistration} error>
            <Form.Field>
              <Label size="large" color="blue" htmlFor="username">
                Username
              </Label>
              <Form.Input
                type="text"
                name="username"
                error="This Username is Unavailable."
                autoFocus
                required
                minLength="3"
                maxLength="20"
                onChange={this.handleChange}
              />
              <Message
                error
                header="Registration Error!"
                content="This Username is Unavailable. Please Create a Unique Username"
                attached="bottom"
              />
            </Form.Field>
            {/* Inserted Display Name */}
            <Form.Field>
              <Label size="large" color="blue" htmlFor="displayName">
                Display Name
              </Label>
              <Form.Input
                type="text"
                name="displayName"
                required
                minLength="3"
                maxLength="20"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Label size="large" color="blue" htmlFor="password">
                Password
              </Label>
              <Form.Input
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

    return (
      <div className="RegistrationForm">
        <Form id="registration-form" onSubmit={this.handleRegistration}>
          <Form.Field>
            <Label size="large" color="blue" htmlFor="username">
              Username
            </Label>
            <Input
              type="text"
              name="username"
              autoFocus
              required
              minLength="3"
              maxLength="20"
              onChange={this.handleChange}
            />
          </Form.Field>
          {/* Inserted Display Name */}
          <Form.Field>
            <Label size="large" color="blue" htmlFor="displayName">
              Display Name
            </Label>
            <Input
              type="text"
              name="displayName"
              required
              minLength="3"
              maxLength="20"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Label size="large" color="blue" htmlFor="password">
              Password
            </Label>
            <Input
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
