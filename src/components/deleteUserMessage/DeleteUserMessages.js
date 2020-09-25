import React from "react";
import { Feed, Icon } from "semantic-ui-react";
import DeleteUserMessagesService from "../../services/DeleteUserMessagesService";
import Message from "./Message";

class DeleteUserMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }



render () {
  if (this.props.match.params.username === this.loginData.result.username) {
    return (
      
    );
  }
}

}

export default DeleteUserMessages;
