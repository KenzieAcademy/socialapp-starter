import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import "../components/loginForm/LoginForm.css"
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import Register from './Register'
import { Input, Button } from "semantic-ui-react";

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
           <div className='registerButton'> 
           <hr />
           <h4>
             Not a Member? 
             Register by clicking below!

           </h4>
           <Button  content='Register' size='small' onClick={this.registerButton}/>
           </div>
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
