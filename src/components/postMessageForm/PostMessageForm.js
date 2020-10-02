import React from "react";
import { Form, Button, TextArea, Message } from "semantic-ui-react";
import PostMessageService from "../../services/PostMessagesService";
import "./PostMessageForm.css";

class PostMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageData: {
        text: "",
      },
      responseCode: null,
    };

    this.PostMessageService = new PostMessageService();
  }

  handleChange = (event) => {
    let messageData = { ...this.state.messageData };
    messageData[event.target.name] = event.target.value;
    this.setState({
      messageData: messageData,
    });
  };

  handleDismiss = (event) => {
    this.setState({
      responseCode: null,
    });
  };

  handleMessagePost = (event) => {
    event.preventDefault();
    this.PostMessageService.postMessage(this.state.messageData)
      .then((result) => {
        console.log(result);
        if (result.data.statusCode === 200) {
          this.setState({
            responseCode: result.data.statusCode,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    let messageData = { text: "" };
    this.setState({
      messageData: messageData,
    });
  };

  render() {
    if (this.state.responseCode === 200) {
      return (
        <div className="PostMessageForm">
          <Form
            className="postMessageFormForm"
            onSubmit={this.handleMessagePost}
            success
          >
            <Form.Field>
              <Form.TextArea
                type="text"
                name="text"
                required
                placeholder="Type a Message Here!"
                minLength="2"
                maxLength="255"
                onChange={this.handleChange}
                value={this.state.messageData.text}
              />
            </Form.Field>
            <Message
              success
              header="You've Posted a Message!"
              onDismiss={this.handleDismiss}
            />
          </Form>
        </div>
      );
    }

    return (
      <div className="PostMessageForm">
        <Form className="postMessageFormForm" onSubmit={this.handleMessagePost}>
          <Form.Field>
            <Form.TextArea
              type="text"
              name="text"
              required
              placeholder="Type a Message Here!"
              minLength="2"
              maxLength="255"
              onChange={this.handleChange}
              value={this.state.messageData.text}
            />
          </Form.Field>
          <Button type="submit">Post Message!</Button>
        </Form>
      </div>
    );
  }
}

export default PostMessageForm;
