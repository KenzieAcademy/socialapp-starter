import React from "react";
import Menu from "../menu/Menu";
import { userIsAuthenticated } from "../../redux/HOCs";
import DataService from '../../DataService'
import './EditProfile.css'
import { Input, Button, TextArea, Form, FormField  } from 'semantic-ui-react'




class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      username: '',
      password:'',
      about:'',
      displayName:'',      
     
    };
    this.client = new DataService()
    
  }
  
  
  
  
  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
    
   
}








  handleSubmit = (event) => {
   event.preventDefault();
   console.log(this.state.user)
   let userData = {

    password:this.state.password,
      about:this.state.about,
      displayName:this.state.displayName,

   }

   this.client.updateUser(userData, this.state.username ).then(result =>{
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
      

      
      <div>
      <Menu isAuthenticated={this.props.isAuthenticated} />
      <div className="profileInput">
        <h2>Profile</h2>

          
          
           
      <Form className='updateForm' onSubmit={this.handleSubmit}>
        
          <FormField>
            <label htmlFor="username">  Enter user name</label>
              <Input
                type="text"
                name="username"
                required
                onChange={this.handleChange}
              />
            </FormField>
          <FormField>
            <label htmlFor="password">  Password </label>
              <Input
                type="text"
                name="password"
                
                
                onChange={this.handleChange}
              />
            </FormField>

            <FormField>
              <h2>About Me</h2>
              <TextArea
                type="text"
                name="about"
             
                onChange={this.handleChange}
              />
            </FormField>

            <FormField>
            <label htmlFor="displayName">  Display Name </label>
              <Input
                type="text"
                name="displayName"
             
                onChange={this.handleChange}
              />
            </FormField>

              
            <br/>
            <Button content='save' primary size='tiny'/>

        
      </Form>
            
          
        
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
        <Button  onClick={this.handleDelete} size='medium'
        content='DELETE PROFILE' inverted color="red"/>
      </div>
      </div>
      
    );
    
  }
  
}


export default userIsAuthenticated(Profile);
