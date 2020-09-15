import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
        <p>Page not found for {this.props.location.pathname}</p>
        {/* Line 9:9:  img elements must have an alt prop, either with meaningful text, 
          or an empty string for decorative images  jsx-a11y/alt-text
        eslint-disable-next-line to the line before.

        <img className="logo" src="https://www.abijita.com/wp-content/uploads/2018/02/404-Error-1280x720.png" /> */}
        <Link to="/">Go Home</Link>
      </div>
    );
  }
}

export default NotFound;
