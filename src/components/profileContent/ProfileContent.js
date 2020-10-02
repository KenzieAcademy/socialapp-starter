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
    <div className="ProfileContentBody">
      <div className="ProfileContent">
        <div className="ProfilePicBox">
          <img alt="Profile Pic" src={MiniProfileIMG} />
        </div>
        <div className="MemberInfoFormBody">
          <Form>
            <div className="MemberInfoBox">
              <div className="MemberInfoText">
                <Form.Label>Display Name: {props.user.displayName}</Form.Label>
                <br></br>
                <Form.Label>Joined On: {joinedOn.toUTCString()}</Form.Label>
              </div>
              <Form.Row>
                <div className="AboutMeBox">
                  <div className="AboutMeText">
                    <Form.Label>About Me: </Form.Label>
                    <div className="AboutMeUserText">
                      <Col>
                        <Form.Text>{props.user.about}</Form.Text>
                      </Col>
                    </div>
                  </div>
                </div>
              </Form.Row>
              <div className="UpdateSwitch">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Update"
                  checked={props.checked}
                  onChange={props.clickSwitch}
                />
              </div>
            </div>
          </Form>
        </div>
        {props.checked && (
          <div className="MemberInfoEdit">
            <Form.Group>
              <Form.Row>
                <Form.Label>Display Name: </Form.Label>
                <Col xs="auto">
                  <Form.Control
                    onChange={props.change}
                    name="displayName"
                    inline="true"
                  ></Form.Control>
                </Col>
              </Form.Row>
              <Form.Row>
                <Form.Label>Password: </Form.Label>
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
                <Form.Label>About Me: </Form.Label>
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
          </div>
        )}
      </div>
      <br></br>
    </div>
  );
};

export default userIsAuthenticated(ProfileContent);
