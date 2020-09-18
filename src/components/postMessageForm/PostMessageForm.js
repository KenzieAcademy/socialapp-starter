import React from "react";
import { Form, Button, TextArea } from "semantic-ui-react";
import PostMessageService from "../../services/PostMessagesService";
import "./PostMessageForm.css";

class PostMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };

    this.PostMessageService = new PostMessageService();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleMessagePost = (event) => {
    event.preventDefault();
    this.PostMessageService.postMessage(this.state).then((result) => {
      console.log(result.data).catch((error) => console.log(error));
    });
    console.log("Post Button Pressed");
  };

  render() {
    return (
      <div className="PostMessageForm">
        <Form className="postMessageFormForm" onSubmit={this.handleMessagePost}>
          <Form.Field>
            <TextArea
              type="text"
              name="text"
              required
              placeholder="Type a Message Here!"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="submit">Post Message!</Button>
        </Form>
      </div>
    );
  }
}

export default PostMessageForm;
