import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import { render } from "react-dom";

class Profile extends React.Component {
  render() {

  


    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>



        <nav class="navv nav-bar-blue">
  <a href="#home" class="nvv">Home</a>
  <a href="#band" class="navv">Band</a>
  <a href="#tour" class="navv">Tour</a>
  <a href="#contact" class="navv">Contact</a>
</nav>


      </div>
    );
  }
}






export default userIsAuthenticated(Profile);



