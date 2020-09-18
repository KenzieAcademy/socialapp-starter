import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import { userIsAuthenticated } from "../../redux/HOCs";

class ProfileContent extends React.Component {
  render() {
    return (
      <div className="ProfileContent">
        <ListGroup>
          <ListGroup.Item>bio</ListGroup.Item>
          <ListGroup.Item>location</ListGroup.Item>
          <ListGroup.Item>joined date</ListGroup.Item>
          <ListGroup.Item>preferred brands</ListGroup.Item>
          <ListGroup.Item>display name</ListGroup.Item>
        </ListGroup>
        <Button>hi</Button>
      </div>
    );
  }
}

export default userIsAuthenticated(ProfileContent);
