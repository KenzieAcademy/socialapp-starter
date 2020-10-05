import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { userIsAuthenticated } from "../../redux/HOCs";
import "../../components/profileContent/ProfileContent.css";
import "../../components/profileContent/ProfileContEdit.css";
import MiniProfileIMG from "../../assets/images/Placeholder_Image.png";
import Form from "react-bootstrap/Form";

const styles = {
  paperContainer: {
    maxwidth: 125,
    maxheight: 125,
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
      <Form>
        <div className="MemberInfoBody">
          <div className="MemberInfoBox">
            <div className="MemberInfo-PicBox">
              <div className="ProfilePicBox">
                <img
                  alt="Profile Pic"
                  src={picture}
                  style={styles.paperContainer}
                  class="img-fluid"
                  variant="dark"
                  title="Profile Pic"
                />
              </div>
              <div className="MemberInfoText">
                <Form.Label>Display Name: {props.user.displayName}</Form.Label>
                <br></br>
                <Form.Label>Joined On: {joinedOn.toUTCString()}</Form.Label>
              </div>
            </div>
            <Form.Row>
              <div className="AboutMeBox">
                <div className="AboutMeHeader">
                  <Form.Label>About Me: </Form.Label>
                  <div className="AboutMeText">
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
                title="Update Your Profile"
                checked={props.checked}
                onChange={props.clickSwitch}
              />
            </div>
          </div>
        </div>
      </Form>
      {props.checked && (
        <div className="EditInfoBody">
          <Form.Group>
            <div className="EditFormBox">
              <Form.Row>
                <div className="EditDisplayBox">
                  <Form.Label className="EditDisplayHeader">
                    Change Display Name To:{" "}
                  </Form.Label>
                  <div className="EditDisplayInput">
                    <Col xs="auto">
                      <Form.Control
                        onChange={props.change}
                        name="displayName"
                        inline="true"
                      ></Form.Control>
                    </Col>
                  </div>
                </div>
              </Form.Row>
              <Form.Row>
                <div className="EditPassBox">
                  <Form.Label className="EditPassHeader">
                    Change Password To:{" "}
                  </Form.Label>
                  <div className="EditPassInput">
                    <Col xs="auto">
                      <Form.Control
                        onChange={props.change}
                        name="password"
                        type="password"
                        inline="true"
                      ></Form.Control>
                    </Col>
                  </div>
                </div>
              </Form.Row>
              <Form.Row>
                <div className="EditAboutBox">
                  <Form.Label className="EditAboutHeader">
                    Change About Me To:{" "}
                  </Form.Label>
                  <div className="EditAboutInput">
                    <Col xs="auto">
                      <Form.Control
                        onChange={props.change}
                        name="about"
                        as="textarea"
                        inline="true"
                      ></Form.Control>
                    </Col>
                  </div>
                </div>
              </Form.Row>
            </div>
            <div className="EditPicBox">
              <div className="CurrentPicBox">
                <img
                  alt="Profile Pic"
                  src={picture}
                  style={styles.paperContainer}
                  class="img-fluid"
                  variant="dark"
                  title="Profile Pic"
                />
              </div>
              <Form.Row>
                <Col>
                  <Form.File
                    className="EditPicHeader"
                    id="profileImg"
                    label="◄Your Current Profile Picture"
                    name="image"
                    onChange={props.changePic}
                    accept="image/*"
                  />
                  <div className="UpdateButtonBox">
                    <Button
                      className="UpdateButton"
                      variant="dark"
                      size="lg"
                      type="primary"
                      onClick={props.upload}
                    >
                      Update Profile Picture
                    </Button>
                  </div>
                </Col>
              </Form.Row>
            </div>
            <Form.Row>
              <div className="SaveButtonBox">
                <Button
                  className="SaveButton"
                  variant="dark"
                  size="lg"
                  type="primary"
                  onClick={props.submitButton}
                >
                  Save Changes
                </Button>
              </div>
            </Form.Row>
          </Form.Group>
        </div>
      )}
    </div>
  );
};

export default userIsAuthenticated(ProfileContent);
