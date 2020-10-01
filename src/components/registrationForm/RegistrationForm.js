import React from "react";
import Spinner from "react-spinkit";
import Menu from "../menu/Menu";
import "./RegistrationForm.css";
import Dataservice from "../../pages/dataService";
import { Link } from "react-router-dom";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      displayName: "",
    };

    this.client = new Dataservice();
  }

  handleRegistration = (e) => {
    e.preventDefault();
    this.client
      .createnewuser(this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="RegistrationForm">
        <Menu />
        <form id="registration-form" onSubmit={this.handleRegistration}>
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
          <br></br>
          <Link to={`/`}>
            <button className="regist" type="submit" disabled={loading}>
              Register
            </button>
          </Link>
          <Link to={`/`}>
            <a className="homepage" type="submit" disabled={loading}>
              Go Back Home
            </a>
          </Link>
        </form>
        {loading && <Spinner name="circle" color="red" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default RegistrationForm;
