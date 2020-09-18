import React from "react";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'


class ProfileContent extends React.Component {
  render() {
    return (
      <div className="ProfileContent">
        <Image>until</Image>
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

