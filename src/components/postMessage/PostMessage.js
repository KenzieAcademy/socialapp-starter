import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import {Container, Form, Button } from "react-bootstrap"

class PostMessage extends React.Component {
  render() {
    return (
      <div className="Message">
        <Container>
          <Form id="postMessageForm" onSubmit={this.props.handleMessagePost}>
            <Form.Group>
              <Form.Control
                type="text"
                name="text"
                placeholder = "What's On Your Mind?"
                required
                onChange={this.props.handleChange}
                value = {this.props.text}
              />
            </Form.Group>
            <Button variant="dark" type="submit">
              Post Message
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default userIsAuthenticated(PostMessage);
