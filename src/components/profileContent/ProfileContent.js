import React from "react";
import Button from "react-bootstrap/Button";
// import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import { userIsAuthenticated } from "../../redux/HOCs";
import "../../components/profileContent/ProfileContent.css";

class ProfileContent extends React.Component {
  render() {
    return (
      <div className="ProfileBody">
        <div className="ProfileContent">
          <ListGroup>
            <ListGroup.Item>About Me</ListGroup.Item>
            <ListGroup.Item>Location</ListGroup.Item>
            <ListGroup.Item>Date Joined</ListGroup.Item>
            <ListGroup.Item>Favorite Brands</ListGroup.Item>
            <ListGroup.Item>Display Name</ListGroup.Item>
          </ListGroup>
        </div>
        <br></br>
        <Button className="SaveButton" variant="dark" size="lg">
          Save Changes
        </Button>
      </div>
    );
  }
}

export default userIsAuthenticated(ProfileContent);
