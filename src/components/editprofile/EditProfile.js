import React from "react";
import Menu from "../menu/Menu";
import { userIsAuthenticated } from "../../redux/HOCs";
import DataService from '../DataService'
import { withRouter } from 'react-router-dom'
import { Input, Button  } from 'semantic-ui-react'




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
   

   this.client.updateUser(this.state, this.state.username ).then(result =>{
    console.log(JSON.stringify(result.data))
  })
  };

  

    handleDelete = e =>{
      e.preventDefault()
      
      this.client.deleteUser(this.state.username).then(result =>{
          alert(result.data)
      })
      
    }



  
  render() {
   
    
    return (
      

      
      
      <div className="profileInput">
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
            <Button primary size='big' >Save</Button>

            
          </div>
        </form>
        
        <hr/>
        <div>
            <label htmlFor="name">  Enter user name</label>
              <Input
                type="text"
                name="username"
                required
                onChange={this.handleChange}
              />
            </div>
        
        <h3><em>THIS CAN NOT BE UNDONE!</em></h3>
        <Button  onClick={this.handleDelete} 
        content='DELETE' inverted color="red"/>
      </div>
    );
    
  }
  
}


export default userIsAuthenticated(Profile);
