import React from "react";

import "./registrationForm.css";
import DataService from "../../DataService";

class RegistrationForm extends React.Component {
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
    return (
      <div>
        <button class="open-button" onClick="openForm()">
          Open Form
        </button>

        <div class="form-popup" id="myForm">
          <form action="/action_page.php" class="form-container">
            <h1>Login</h1>

            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <button type="submit" class="btn">
              Login
            </button>
            <button type="button" class="btn cancel" onclick="closeForm()">
              Close
            </button>
          </form>
        </div>
      </div>

      // <div className="RegistrationForm">
      //   <form id="registration-form" onSubmit={this.handleRegistration}>
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
      //     <button type="submit" disabled={loading}>
      //       Register
      //     </button>
      //   </form>
      //   {loading && <Spinner name="circle" color="blue" />}
      //   {error && <p style={{ color: "red" }}>{error.message}</p>}
      // </div>
    );
  }
}

export default RegistrationForm;
