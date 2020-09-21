import React from "react";
import "./About.css";
import Menu from "../../components/menu/Menu";
import FootNavBar from "../../components/footNavBar/FootNavBar";

import { userIsAuthenticated } from "../../redux/HOCs";

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h1>This is the "About the Universe" page.</h1>;
        <FootNavBar isAuthenticated={this.props.isAuthenticated} />
      </div>
    );
  }
}

export default userIsAuthenticated(About);
