import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { userIsAuthenticated } from "../../redux/HOCs";
import "../../components/profileContent/ProfileContent.css";
import MiniProfileIMG from "../../assets/images/Placeholder_Image.gif";
import Form from "react-bootstrap/Form";

const styles = {
  paperContainer: {
    height: 120,
    width: 120,
    maxwidth: 20,
    maxheight: 20,
    backgroundImage: `url(${"static/src/img/main.jpg"})`,
  },
};

const ProfileContent = (props) => {
  let joinedOn = new Date(props.user.createdAt);
  let picture = MiniProfileIMG;
  if (props.user.pictureLocation !== null) {
    picture = `https://socialapp-api.herokuapp.com${props.user.pictureLocation}`;
  }

  return (
    <div className="ProfileContentBody">
      <div className="ProfileContent">
        <img
          alt="profile"
          src={picture}
          style={styles.paperContainer}
          className="btn btn-primary"
        />
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
              <Col>
                <Form.File
                  id="profileImg"
                  label="Upload Profile Image"
                  name="image"
                  onChange={props.changePic}
                  accept="image/*"
                />
                <Button type="primary" onClick={props.upload}>
                  Update Profile Picture
                </Button>
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
