import React from "react";
import "./About.css";
import Menu from "../../components/menu/Menu";
<<<<<<< HEAD
import FootNavBar from "../../components/footNavBar/FootNavBar";
=======
>>>>>>> master

import { userIsAuthenticated } from "../../redux/HOCs";

class About extends React.Component {
<<<<<<< HEAD
  render() {
    return (
      <div className="About">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h1>This is the "About the Universe" page.</h1>;
        <FootNavBar isAuthenticated={this.props.isAuthenticated} />
      </div>
    );
  }
=======
    render() {
        return (
            <div className="About">
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <h1>About the Universe (of Squirrels)</h1>
            </div>
        )
    }
>>>>>>> master
}

export default userIsAuthenticated(About);
