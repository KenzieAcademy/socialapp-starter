import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Tooltip from "react-bootstrap/Tooltip";
import { userIsAuthenticated } from "../../redux/HOCs";
import { OverlayTrigger } from "react-bootstrap";
import "./Post.css";
import Image from "../../assets/images/Upload_Button.png";

const Post = (props) => {
  return (
    <div className="PostFormBody" style={{ width: "0px", height: "0px" }}>
      <Card className="PostCardBody">
        <Card.Body>
          <Form>
            <div className="PostInputBox">
              <Form.Control
                type="text"
                name="text"
                as="textarea"
                rows="3"
                placeholder="Your Amazing Post Here"
                onChange={props.change}
              />
            </div>
            <br></br>
            <div className="PhotoUploadBox">
              <OverlayTrigger
                placement="left"
                overlay={
                  <Tooltip id="tooltip-proof-of-concept">
                    This API cannot post images along with messages, however we
                    wanted to include it as proof of concept for what the real
                    site would be like.
                  </Tooltip>
                }
              >
                <Form.File
                  className="UploadHeaderText"
                  id="uploadImage"
                  label="Upload Your Image"
                  disabled
                />
              </OverlayTrigger>
            </div>
            <div className="FakeButtonBox">
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id="tooltip-proof-of-concept">
                    This API cannot post images along with messages, however we
                    wanted to include it as proof of concept for what the real
                    site would be like.
                  </Tooltip>
                }
              >
                <img
                  className="FakeButton"
                  src={Image}
                  alt="Fake Upload Button"
                ></img>
              </OverlayTrigger>
            </div>
          </Form>
          <div className="PostAwayButtonBox">
            <input
              className="PostAwayButton"
              type="submit"
              value=""
              title="Post Away!"
              onClick={props.post}
            ></input>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default userIsAuthenticated(Post);
