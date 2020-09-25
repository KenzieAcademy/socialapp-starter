import React from "react";
import Card from "react-bootstrap/Card";

import { userIsAuthenticated } from "../../redux/HOCs";
import "../../components/profileContent/ProfileContent.css";

class ProfileContent extends React.Component {
  render() {
    return (
      <div ClassName="card">
        <Card ClassName="ProfileMain" style={{ width: "25rem" }}>
          <Card.Img
            variant="top"
            src="https://image.shutterstock.com/image-vector/avatar-vector-male-profile-gray-260nw-538707355.jpg"
          />
          <Card.Body>
            {/* pictureLocation */}
            <Card.Title>User Name</Card.Title>
            <Card.Title>Display Name</Card.Title>
            <Card.Title>about</Card.Title>
            <Card.Title>CreatedAT</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default userIsAuthenticated(ProfileContent);
