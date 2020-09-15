import React from "react";

import { withAsyncAction } from "../../redux/HOCs";
import "./FootNavBar.css";

class FootNavBar extends React.Component {
  render() {
    return (
      <div className="footer-menu">
        {this.props.isAuthenticated && (
          <div id="footer-links">
            <a href={"https://www.nasa.gov"} target="blank">
              NASA
            </a>
            <a href={"https://www.imdb.com/list/ls021424736/"} target="blank">
              Sci-Fi Movies
            </a>
            <a href={"https://www.funbrainfree.com/math-games/"} target="blank">
              Sponsered By FUNBRAIN
            </a>
            <a href={"https://www.facebook.com/ashley.storer.9"} target="blank">
              Like us on FB
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(FootNavBar);
