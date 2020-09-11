import React, { Component } from "react";
import DataService from "../../pages/dataService";

class MessageFeed extends Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
    this.state = {
      data: {
        messages: [],
        count: null,
        statusCode: null,
      },
      message: {
        id: null,
        text: "",
        username: "",
        createdAt: "",
        likes: [],
      },
    };
  }
  getMessages() {
    return this.client.getMessageList().then((result) => {
      this.setState({
        data: result.data.messages[0],
      });
    });
  }
}

export default MessageFeed;
