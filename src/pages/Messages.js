import React, { Component } from "react";
import MessageService from "../MessageService.js";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.client = new MessageService();
    this.state = {
      data: []
    };
  }

  getNewMessages = () => {
    return this.client.getMessage().then((result) => {
      let theMessage = result.data.messages 
      this.setState({
        data: theMessage[0]
      })
    })
    
  }

  componentDidMount() {
    this.getNewMessages();
  }

  render() {



    return (
      <div className="MessagesDiv">
        <h1>Our Messages go on this page</h1>
    <h2>Message: {this.state.data.text} </h2>
      </div>
    );
  }
}

export default Messages;
