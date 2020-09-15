import React from "react";
import { Link } from "react-router-dom";


class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
        Feel Alone? {this.props.location.pathname}
        <Link to="/">Go Home</Link>
      </div>
    );
  }
}
//<a href='https://www.freepik.com/vectors/business'>Business vector created by pikisuperstar - www.freepik.com</a>
export default NotFound;
