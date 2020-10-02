import React from "react";

import { userIsAuthenticated } from "../redux/HOCs";
import { displayName } from "react-spinkit";
import DataService from "../DataService";

import '../components/editprofile/EditProfile.css'
import EditProfile from '../components/editprofile/EditProfile'
import ProfilePageMain from "./ProfilePageMain";

import { Button } from "semantic-ui-react";




class Profile extends React.Component {
  constructor(props) {
    super(props);

     
    this.state={
      isClicked:false,
      

      }
    
    this.client = new DataService()
  }
  
  
  componentDidMount(){
    const currentUser = JSON.parse(localStorage.getItem("login"));

        const { username } = currentUser.result;
       
        this.client.getUser(username).then(result => this.setState({aboutMe:result}))
        console.log(this.state.aboutMe)

    

    

  }
  





  
  EditProfileButton =(event) => {
    this.setState(
      {isClicked:true}
    )
      
    }



    


  
  
  
  





  
  render() {
    console.log(this.state.aboutMe)
    
    
   let content =(
     <>
     
     
      <ProfilePageMain/>

      <div className='profilePicture'>Profile picture field</div>
      <div className='aboutMe'></div>
      <br/>

      <Button className='editButton' onClick={this.EditProfileButton} content='Edit Profile' primary  size='small'/>
       
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


   
  


