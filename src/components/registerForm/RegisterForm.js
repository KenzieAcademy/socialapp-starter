import React from "react"
import Spinner from "react-spinkit";
import "./RegisterForm.css";
import Service from "../../Service"

class RegisterForm extends React.Component {
    constructor(props) {
      super(props)

      this.client = new Service()
      this.state = {
        username: "",
        password: "",
        displayName: ""
      }
    }
  
    handleRegister = e => {
      e.preventDefault();
      this.client.registerUser(this.state);
    };
  
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    render() {
      const { loading, error } = this.props;
      return (
        <div className="RegisterForm">
          <form id="register-form" onSubmit={this.handleRegister}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              autoFocus
              required
              onChange={this.handleChange}
            />
            <label htmlFor="displayName">Display Name</label>
            <input
              type="text"
              name="displayName"
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
  
<<<<<<< HEAD
  export default (RegisterForm);
=======
  export default (RegisterForm);
  
>>>>>>> f79184a138a438041445699fdaedbc7b19ca52ee
