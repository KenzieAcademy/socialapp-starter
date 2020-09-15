import React from "react"
// import Spinner from "react-spinkit";
import "./RegisterForm.css";
import FetchService from "../../FetchService"

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)

    this.client = new FetchService()
    this.state = {
      formData: {
      username: "",
      password: "",
      displayName: ""
      }, 
      error: "",
      submitted: false
    };
  }

  handleRegister = event => {
    event.preventDefault();
    this.client.registerUser(this.state.formData)
        .then(error => {
          console.log(error)
          this.setState({
              error: error.message
          })
        })

      this.setState({
        submitted: true
      })  
  };

  handleChange = event => {
    const newformData = { ...this.state.formData };
    newformData[event.target.name] = event.target.value;

    this.setState({ formData: newformData });
  }

  render() {
    let formElement = ""
    if(!this.state.submitted){
       formElement = (<form id="register-form"> 
         else {
           formElement = <div>Thank you for registering</div>

      }         
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
       <button type="submit" onClick={this.handleChange}>
         Register
         </button>
     </form>)
    }
    // const { loading, error } = this.props;
    return (
      <div className="RegisterForm">
          {formElement}
        {/* <form id="register-form" onSubmit={this.handleRegister}>          
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
          <button type="submit" onClick={this.handleChange}>
            Register
            </button>
        </form> */}
        
        {this.state.error !== "" && <p style={{ color: "red" }}>{this.state.error}</p>}
      </div>
    );
  }
}

export default (RegisterForm);
