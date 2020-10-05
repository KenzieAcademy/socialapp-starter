import React from "react";
import { Button, Comment, Form } from "semantic-ui-react";
import Message from "../../components/message/message";
import socialAppService from "../../socialAppService";



class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.client = new socialAppService();
    this.state = {

      lastRefresh: Date(Date.now()).toString(),
      messages: [],
      formData: {},
    };
    this.refreshScreen = this.refreshScreen.bind(this)
  }

  componentDidMount() {
    this.client.getRecentMessages().then((messages) => {
      this.setState({ messages });
    });
  }


  refreshScreen() {
    this.setState({ lastRefresh: Date(Date.now()).toString() })
  }


  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  handlePost = (e) => {
    e.preventDefault();
    this.client.postNewMessage(this.state.formData.message);
    this.formData = {};
  };

  render() {
    const CommentForm = (
      <Comment.Group>
        <Comment className="comment">
          <Comment.Content>
            <Comment.Actions></Comment.Actions>

            <Form reply onSubmit={this.refreshScreen}>
              <Form.TextArea name="message" onChange={this.handleChange} />

              <Button
                onClick={this.handlePost}
                content="Add Reply"
                labelPosition="left"
                icon="edit"
                primary
              />
            </Form>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    );



    if (this.state.messages.length === 0) {
      return (
        <div className="Comment">
          {CommentForm}
          <h1>Messages</h1>
          <h3>Please wait. The Squirrels are gathering their nuts</h3>
        </div>
      );
    }
    return (
      <div className="Comment">
        {CommentForm}
        <h1>Messages</h1>
        <ul>
          {this.state.messages.map((msg) => (
            <Message key={msg.id} {...msg} />
          ))}
        </ul>
      </div>

    );
  }
}

export default CommentForm;
