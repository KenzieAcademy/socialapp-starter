import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";

const Message = () => (
  <Comment.Group>
    <Header as="h3" dividing>
      Comments
    </Header>

    <Form reply>
      <Form.TextArea />
      <Button content="Add Reply" labelPosition="left" icon="edit" primary />
    </Form>
  </Comment.Group>
);

export default Message;
