import React from "react";
import Spinner from "react-spinkit";
import "./RegistrationForm.css";
import DataService from "../../DataService";
<<<<<<< HEAD


=======
import { Button } from "antd";
>>>>>>> 6d6aa202e71895d47dfe6f16db56548337bf7196
class RegistrationForm extends React.Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      
      username: "",
      password: "",
      displayName: "",
    };

    this.client = new DataService();
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
        <form id="Registration-form" onSubmit={this.handleRegistration}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            name="displayName"
            required
            onChange={this.handleChange}
          />
          <button type="submit" disabled={loading}>
            Register
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default RegistrationForm;
