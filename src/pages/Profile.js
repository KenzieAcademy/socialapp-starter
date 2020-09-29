import React from "react";

import { userIsAuthenticated } from "../redux/HOCs";

import EditProfile from '../components/editprofile/EditProfile'
import ProfilePageMain from "./ProfilePageMain";

import { Button } from "semantic-ui-react";




class Profile extends React.Component {
  constructor(props) {
    super(props);

     
    this.state={
      isClicked:false

      }
    
    
  }

  
  EditProfileButton =(event) => {
    this.setState(
      {isClicked:true}
    )
      
    }
  
  
  
  





  
  render() {
   let content =(
     <>
     
     
      <ProfilePageMain/>
      

      

      <Button onClick={this.EditProfileButton} content='Edit Profile' primary  size='small'/>
       
      </>
   )
   if ( this.state.isClicked ) {
    content = ( <EditProfile/> )
}

return (
  <div className="Home">
      {content}
  </div>
 )
    
  }
  
}


export default userIsAuthenticated(Profile);


   
  


