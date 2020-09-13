import React from "react";
import { Link } from "react-router-dom";
import { withAsyncAction } from "../../redux/HOCs";
import "./FootNavBar.css";

class FootNavBar extends React.Component {
  render() {
    return (
      <div className="footer-menu">
        {this.props.isAuthenticated && (
          <div id="footer-links">
            {/* trying to figure out how to write this to make it link. */}
            <a href={"https://www.nasa.gov"}>NASA</a>
            <Link to="/">Sci-Fi Movies</Link>
            <Link to="/">Advertising</Link>
            <Link to="/">Like us on FB</Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(FootNavBar);
