import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import Register from './Register'
import { useHistory } from 'react-router-dom';

class Home extends React.Component {
  constructor(props){
    super(props)




  }

registerButton(){
  return {Register}
}



  
  



  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <hr/>
        <h4><em>
        Not a member?
        Register below!
        <div>
          
        <button  onClick={this.registerButton} >Register</button> 
       
        </div>
        </em>
        </h4>
        
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
