import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
        <p>Page not found for {this.props.location.pathname}</p>
<<<<<<< HEAD:src/pages/NotFound.js
        <img className="logo" src="https://sequencing.roche.com/content/dam/rochesequence/worldwide/global/404.png"/>
=======
        <img className="logo" src="https://www.abijita.com/wp-content/uploads/2018/02/404-Error-1280x720.png" />
>>>>>>> f79184a138a438041445699fdaedbc7b19ca52ee:src/components/notfound/NotFound.js
        <Link to="/">Go Home</Link>
      </div>
    );
  }
}

export default NotFound;
