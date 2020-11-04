import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../components/assets/stylesheets/NotFound.css";

class NotFound extends React.Component {
  render() {
    return (
      <div className="container-NF">
        <div className="NotFound">
          <p>Page not found for {this.props.location.pathname}</p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJIGn04fiHDa1R6xkCwBH8vlWsUEhlqYrXBg&usqp=CAU"
            alt="404 error"
          />{" "}
          <br />
          <Link to="/">
            <Button color="primary" type="submit">
              <h3>Go Home</h3>
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
