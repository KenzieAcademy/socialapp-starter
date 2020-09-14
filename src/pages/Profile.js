import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
class Profile extends React.Component {
  super(props) {
    this.state = {
      username: [],
      picture: "",
    }









    
  }



















  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <footer>
          <div class="main-content">
            <div class="left box">
              <h4 class="ui header">About Us!</h4>
              <div class="content">
                <p>We are the <em>Klinesettes</em></p>
                <div class="social links">
                  <a href="google.com" ><span><h2 class="ui header"><i class="small icons"><i aria-hidden="true" class="yellow google icon"></i></i></h2>
                  </span>
                  </a>
                  <a href="twitter.com" ><span><h2 class="ui header"><i class="small icons"><i aria-hidden="true" class="blue twitter icon"></i></i></h2>
                  </span>
                  </a>
                  <a href="instagram.com" ><span><h2 class="ui header"><i class="small icons"><i aria-hidden="true" class="purple instagram icon"></i></i></h2>
                  </span>
                  </a>
                </div>
              </div>
              <div class="center box">
                <h4 class="ui header">Meet the Dev's </h4>
                <div class="content">
                  <div class="dev">
                  </div>
                  <a class="ui card" href="google.com"><div class="content"><div class="header">Elliot Baker</div><div class="meta">Friend</div><div class="description">Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.</div></div></a>
                  <div class="dev">
                  </div>
                  <a class="ui card" href="google.com"><div class="content"><div class="header">Law & Order</div><div class="meta">Friend</div><div class="description">Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.</div></div></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div class="ui card">
              <div class="image"><img src="./images/6.jpg" /></div>
              <div class="content">
                <div class="header">Elliot Baker</div>
                <div class="meta">Friend</div>
                <div class="description">Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.</div></div>
              <div class="extra content"><a><i aria-hidden="true" 
              class="user icon"></i>1 Friends</a></div></div>
      </div>
    );
  }
}
export default userIsAuthenticated(Profile);
