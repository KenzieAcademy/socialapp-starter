import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { userIsAuthenticated } from "../../redux/HOCs";
import "../../components/profileContent/ProfileContent.css";
import MiniProfileIMG from "../../assets/images/Placeholder_Image.gif";
import Form from "react-bootstrap/Form";

const ProfileContent = (props) => {
  let joinedOn = new Date(props.user.createdAt);

  return (
    <div className="ProfileBody">
      <div className="ProfileContent">
        <img alt="Profile Pic" src={MiniProfileIMG} />
        <Form>
          <Form.Label>{props.user.displayName}</Form.Label>
          <br></br>
          <Form.Label>Joined On: {joinedOn.toUTCString()}</Form.Label>
          <Form.Row>
            <Form.Label>Bio </Form.Label>
            <Col>
              <Form.Text>{props.user.about}</Form.Text>
            </Col>
          </Form.Row>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Update Profile"
            checked={props.checked}
            onChange={props.clickSwitch}
          />
        </Form>
        {props.checked && (
          <Form.Group>
            <Form.Row>
              <Form.Label>Display Name</Form.Label>
              <Col xs="auto">
                <Form.Control
                  onChange={props.change}
                  name="displayName"
                  inline="true"
                ></Form.Control>
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Label>Password</Form.Label>
              <Col xs="auto">
                <Form.Control
                  onChange={props.change}
                  name="password"
                  type="password"
                  inline="true"
                ></Form.Control>
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Label>Bio</Form.Label>
              <Col xs="auto">
                <Form.Control
                  onChange={props.change}
                  name="about"
                  as="textarea"
                  inline="true"
                ></Form.Control>
              </Col>
            </Form.Row>
            <Form.Row>
              <Button type="primary" onClick={props.submitButton}>
                Save Changes
              </Button>
            </Form.Row>
          </Form.Group>
        )}
      </div>
      <br></br>
    </div>
  );
};

export default userIsAuthenticated(ProfileContent);
