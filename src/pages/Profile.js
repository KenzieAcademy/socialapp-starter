import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import UserData from "../components/getUsers/getUsers"
import UserProfile from "../components/UpdateUser/UserProfile"
class Profile extends React.Component {
  render() {if(this.props===null)
    return(<div><h1>loading</h1></div>)
    console.log(this.props.match.params.username)
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        
        {/* <UserData/> */}
       
        <UserProfile
         name= {this.props.match.params.username}/>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
