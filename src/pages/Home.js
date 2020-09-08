import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Quests will appear here!</h2>
        <LoginForm />



       
       <nav class="navv navv-black">
  <a href="#home" class="navv">Home</a>
  <a href="#band" class="navv">Band</a>
  <a href="#tour" class="navv">Tour</a>
  <a href="#contact" class="navv">Contact</a>
       </nav>


        
      </div>
    );
  }
}



















export default userIsNotAuthenticated(Home);
