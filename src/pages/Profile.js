import React from "react";

import { userIsAuthenticated } from "../redux/HOCs";
import Messages from './Message'
import Menu from "../components/menu/Menu";
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
     
     <Menu isAuthenticated={this.props.isAuthenticated} />
      <ProfilePageMain/>
      

      

      <Button onClick={this.EditProfileButton} primary  size='big'>
          Edit Profile
        </Button>
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


   
  


