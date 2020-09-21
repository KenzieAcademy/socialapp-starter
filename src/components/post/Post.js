import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import SocialappService from "../../socialappService";
import { userIsAuthenticated } from "../../redux/HOCs";
import { OverlayTrigger } from "react-bootstrap";
import "./Post.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.client = new SocialappService();
    this.state = {
      text: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePost = (e) => {
    e.preventDefault();
    this.client.postMessage(this.state);
  };

  render() {
    return (
      <div className="PostForm">
        <Card>
          {/* <Card.Title>POST A MESSAGE</Card.Title> */}
          <Card.Body>
            <Form>
              <Form.Control
                type="text"
                name="text"
                as="textarea"
                rows="3"
                placeholder="YOUR AMAZING MESSAGE HERE:"
                onChange={this.handleChange}
              />
              <div>
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              </div>
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
                <Form.File id="uploadImage" label="UPLOAD IMAGE:" disabled />
              </OverlayTrigger>
            </Form>
            <div>
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            </div>
            <Button variant="dark" onClick={this.handlePost}>
              POST AWAY!
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default userIsAuthenticated(Post);
