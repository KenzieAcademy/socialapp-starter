import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import DataService from '../components/DataService'
import { withRouter } from 'react-router-dom'
import { Input } from 'semantic-ui-react'

//Experimental Code Start

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      
      firstname: "",
      middlename: "",
      lastname: "",
      DateOFBirth: "",
      profilePhoto:"",
      creamername: "",
      favoritepet: "",
      
    };
    this.client = new DataService()
  }
  
  
  
  
  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
    
   
    
}








  handleSubmit = (event) => {
   event.preventDefault();
   console.log(this.state)
   alert(JSON.stringify(this.state))

   this.client.updateUser(this.state, this.state.username ).then(result =>{
    console.log(JSON.stringify(result.data))
  })
  };





  
  render() {
   
    
    return (


      
      
      <div className="Message">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>

        <form onSubmit={this.handleSubmit}>
          <div>
          
           
          <div>
            <label htmlFor="name">  Enter user name</label>
              <Input
                type="text"
                name="username"
                required
                onChange={this.handleChange}
              />
            </div>
          <div>
            <label htmlFor="name">  First Name </label>
              <Input
                type="text"
                name="firstname"
                
                
                onChange={this.handleChange}
              />
            </div>

            <div>
              <label htmlFor="name">  Middle Name </label>
              <Input
                type="text"
                name="middlename"
             
                onChange={this.handleChange}
              />
            </div>

              <label htmlFor="name">  Last Name </label>
            <div>
              <Input
                type="text"
                name="lastname"
                
                onChange={this.handleChange}
              />
            </div>

            <div>
              <label htmlFor="DOB">  DateOFBirth </label>
              <Input
                type="text"
                name="DateOFBirth"
                
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="profilePhoto">  Profile Photo </label>
              <Input
                type="text"
                name="profilePhoto"
                
                onChange={this.handleChange}
              />
            </div>

            <div>
              <label htmlFor="CreamerName">  Creamer Name </label>
              <Input
                type="text"
                name="CreamerName"
                
                onChange={this.handleChange}
              />
            </div>

            <div>
              <label htmlFor="petname">  Favorite Pet </label>
              <Input
                type="text"
                name="favoritepet"
                
                onChange={this.handleChange}
              />
            </div>
            <br/>
            <button types="submit">Save</button>
          </div>
        </form>
      </div>
    );
    
  }
  
}

//End Of New Code for Editing Profile
export default userIsAuthenticated(Profile);
