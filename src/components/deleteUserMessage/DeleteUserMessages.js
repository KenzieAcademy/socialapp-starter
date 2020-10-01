import React from "react";
import { Feed, Icon, Button } from "semantic-ui-react";
import DeleteUserMessagesService from "../../services/DeleteUserMessagesService";
import DeleteUserMessageModal from "../deleteUserMessageModal/DeleteUserMessageModal";

class DeleteUserMessages extends React.Component {
  constructor(props) {
    super(props);
    this.deleteService = new DeleteUserMessagesService();
    this.state = { messages: [] };
    this.loginData = JSON.parse(localStorage.getItem("login"));
    this.messageId = this.props.messageId;
  }

  handleDeleteUserMessage = (e) => {
    this.deleteService.deleteUserMessage(String(this.messageId)).then(() => {
      window.location.reload();
    });
  };

  render() {
    return (
      <DeleteUserMessageModal
        handleDeleteUserMessage={this.handleDeleteUserMessage}
      />
    );
  }
}

export default DeleteUserMessages;
