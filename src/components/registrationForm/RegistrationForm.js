import React from "react";
import Spinner from "react-spinkit";
import { withRouter } from 'react-router-dom'

// import { withAsyncAction } from "../../redux/HOCs";
import "./RegistrationForm.css";
import DataService from "../../dataService"

class RegistrationForm extends React.Component {
    this.client.registerUser(this.state).then(result => {
      // alert(JSON.stringify(result.data));
      alert('Success! Please login');
      this.props.history.push('/')

      // this.props.login(this.state)
      // this.setState({
      //   username: "",
      //   password: "",
class RegistrationForm extends React.Component {
  }
}

export default RegistrationForm;
export default withRouter(RegistrationForm);
// export default withAsyncAction("auth", "login")(LoginForm);