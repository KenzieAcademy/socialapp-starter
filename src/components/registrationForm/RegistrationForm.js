import React from "react";
import Spinner from "react-spinkit";
<<<<<<< HEAD
import { withAsyncAction } from "../../redux/HOCs";
import "./RegistrationForm.css";
import DataService from '../../dataService';
=======
// import { withRouter } from 'react-router-dom'
import { withAsyncAction } from "../../redux/HOCs";
import DataService from "../../dataService"


>>>>>>> lesa-branch

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
<<<<<<< HEAD
=======
    this.client = new DataService()
>>>>>>> lesa-branch
    this.state = {
      username: "",
      password: "",
      displayName: ""
<<<<<<< HEAD
    };
    this.client = new DataService();
=======
    }
>>>>>>> lesa-branch
  }

  handleRegistration = e => {
    e.preventDefault();
    this.client.registerUser(this.state).then(result => {
<<<<<<< HEAD
      // alert(JSON.stringify(result.data))
=======
      // this.props.history.push('/')
>>>>>>> lesa-branch
      this.props.login(
        {
          "username": this.state.username,
          "password": this.state.password
        }
<<<<<<< HEAD
        );
    
    })
    
  };



=======
      )
    })
  };

>>>>>>> lesa-branch
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="RegistrationForm">
        <form id="registration-form" onSubmit={this.handleRegistration}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
<<<<<<< HEAD
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            name="displayName"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
=======
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
>>>>>>> lesa-branch
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
=======
// export default withRouter(RegistrationForm);
>>>>>>> lesa-branch
export default withAsyncAction("auth", "login")(RegistrationForm);
