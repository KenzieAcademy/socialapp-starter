import React from "react";
import { Button, Comment, Form } from "semantic-ui-react";
import Message from "../message/Message";
import socialAppService from "../../socialAppService";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.client = new socialAppService();
    this.state = {
      messages: [],
      formData: {},
    };
  }

  componentDidMount() {
    this.client.getRecentMessages().then((messages) => {
      this.setState({ messages });
    });
  }

  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  handlePost = (e) => {
    e.preventDefault();
    this.client.postNewMessage(this.state.formData.message)
  }

  render() {
    const CommentForm = (
      
      <Comment.Group>
        
        <Comment className="comment">
          <Comment.Content>
        
            <Comment.Actions></Comment.Actions>
        
            <Form reply>
        
              <Form.TextArea name="message" 
              onChange={this.handleChange} />
        
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
