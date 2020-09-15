import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import Register from './Register'


class Home extends React.Component {
  constructor(props){
    super(props)
    
    this.state={
      isClicked:false

      }
    }


  

registerButton =(event) => {
  this.setState(
    {isClicked:true}
  )
    
  }



  
  render(){
     let content = (
        <> 
           <LoginForm />
           <hr />
           <h4>
             Not a Member? 
             Register by clicking below!

           </h4>
           <button onClick={this.registerButton}> Register </button>
        </>
           )

      if ( this.state.isClicked ) {
           content = ( <Register/> )
       }
     return (
           <div className="Home">
               <Menu />
               {content}
           </div>
          )
  }
   

}

export default userIsNotAuthenticated(Home);
