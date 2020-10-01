import React from "react";
import { Feed, Icon, Button } from "semantic-ui-react";
import DeleteUserMessagesService from "../../services/DeleteUserMessagesService";

class DeleteUserMessages extends React.Component {
  constructor(props) {
    super(props);
    this.deleteService = new DeleteUserMessagesService();
    this.state = { messages: [] };
    this.loginData = JSON.parse(localStorage.getItem("login"));
    this.messageId = this.props.messageId;
  }

  // componentDidMount() {
  //   MessageService.obtainMessages().then((response) => {
  //     this.setState({ messages: response.data.messages });
  //     console.log(response.data.messages);
  //   });
  // }

  handleDeleteUserMessage = () => {
    console.log(this.messageId);
    this.deleteService.deleteUserMessage(String(this.messageId));
  };

  render() {
    return (
      <Button onClick={this.handleDeleteUserMessage}>Delete Message</Button>
    );
  }
}

export default DeleteUserMessages;
