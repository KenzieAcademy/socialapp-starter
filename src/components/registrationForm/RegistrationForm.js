import React from "react";
import { withAsyncAction } from "../../redux/HOCs";
import "./RegistrationForm.css";
import RegistrationService from "./registrationService"
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";








class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {username: "",
      displayName: "",
      password: ""},
      boolean : false
    };
    
    this.client = new RegistrationService()
  }
  
  
  
  handleRegistration = e => {
    e.preventDefault();
    this.client.registerUser(this.state.formData).then((result) => {
      console.log(result.data.statusCode)
        this.setState({boolean : true})
      
      }
      
      
    )
  };

  handleChange = (event) => {
    let formData = this.state.formData;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  render() {
      if (this.state.boolean === true){
        return (
        <div className = "successReg">
        <h1>You're IN!</h1>
        <Link to = "/"> Home </Link>
        </div>)

      }
      else{
    return (
             
      <div className="RegistrationForm">
      
        <Container maxWidth = "sm">
        <form id="registration-form" onSubmit={this.handleRegistration}>
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
           <Button color = "secondary" type="submit">
            Register
          </Button>
          
          
          
          
        </form>
        
{/* 
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>} */}


        </Container>
      </div>
    );}
  }
}

export default withAsyncAction("auth", "login")(RegistrationForm);

