import React from "react";
import Spinner from "react-spinkit";
<<<<<<< HEAD
import "./RegistrationForm.css";
import DataService from "../../DataService"
=======
import "./registrationForm.css";
import DataService from "../../dataService/dataService";
>>>>>>> adbranch

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      displayName: ""
    };
<<<<<<< HEAD
    this.client = new DataService()
  }

=======
    this.client = new DataService();
  }
>>>>>>> adbranch
  handleRegistration = e => {
    e.preventDefault();
    this.client.registerUser(this.state).then(result => {
      alert(result.data)
<<<<<<< HEAD
    })
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

=======
    }
    )
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
>>>>>>> adbranch
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
<<<<<<< HEAD
            minLength='3'
            maxLength='20'
=======
>>>>>>> adbranch
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
<<<<<<< HEAD
            minLength='8'
            maxLength='20'
            onChange={this.handleChange}
          />
          <label htmlFor="displayName">Display Name</label>
=======
            onChange={this.handleChange}
          />
          <label htmlFor="displayName">Name</label>
>>>>>>> adbranch
          <input
            type="text"
            name="displayName"
            required
<<<<<<< HEAD
            minLength='3'
            maxLength='20'
=======
>>>>>>> adbranch
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
export default RegistrationForm;
=======
export default RegistrationForm
>>>>>>> adbranch
