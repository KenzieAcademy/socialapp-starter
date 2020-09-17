import React from "react";
// import Navigation from "../components/Navigation/Navigation"
import { userIsAuthenticated } from "../redux/HOCs";
import "bootstrap/dist/css/bootstrap.min.css"



class Profile extends React.Component {
  
  render() {
    return (
      <div className="Profile">
        {/* <Navigation isAuthenticated={this.props.isAuthenticated} /> */}
        <h2>Profile</h2>
        <div className="container" style={{ width: "20rem" }} >
          <div className="card" style={{ style: "18rem" }} >
            <img className="card-img-top" src="https://media.geeksforgeeks.org/wp-content/uploads/20190506125816/avt.png" alt="" />
            <div className="card-body" >
              <h4 className="card-title" > Name </h4>
              <p className="card-text" >About Me</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default userIsAuthenticated(Profile);

