import React from "react";
import MessageService from "../../services/MessageService";
import GetMessageDisplay from "./GetMessagesDisplay";
// import UserDataService from "../../services/UserDataService";
// Using the UserDataService to find the user then have the user's Display Name be used instead of using the Username temporarily on hold until Message works

class GetMessages extends React.Component {
  constructor(props) {
    super(props);
    this.MessageService = new MessageService();
    this.state = {
      datamessages: { messages: [] },
      usersBy10: [],
      messagesBy10: [],
      value: 0,
    };
  }
  // This should grab all the messages and place them into the messages Array
  handleGetMessages = (event) => {
    this.MessageService.obtainMessages().then((result) => {
      this.setState({
        datamessages: result,
      });
      this.handleDisplayMessages();
    });
  };

  componentDidMount() {
    this.handleGetMessages();
  }

  //   This should organize the messages into groups for pagination component? By 10 only Requires more research!
  handleDisplayMessages = (event) => {
    for (
      let i = 0;
      i < this.state.datamessages.data.messages.length;
      i = i + 10
    ) {
      let userSetup = [];
      let messageSetup = [];
      for (let j = i + 0; j < i + 10; j++) {
        if (this.state.datamessages.data.messages[j] === undefined) {
          break;
        }
        const userPush = [this.state.datamessages.data.messages[j].username];
        const messagePush = [this.state.datamessages.data.messages[j].text];
        userSetup.push(userPush);
        messageSetup.push(messagePush);
      }
      this.state.usersBy10.push(userSetup);
      this.state.messagesBy10.push(messageSetup);
    }
    console.log(this.state.messagesBy10);
    console.log(this.state.messagesBy10[0][0][0]);
    let arrayThis = this.state.messagesBy10[0];
    console.log(arrayThis);
  };

  // pullUser(arrayIndex, arrayMessage) {
  //   const user = this.state.messagesBy10[0][0][0];
  //   if (user === undefined) {
  //     return "It did not work";
  //   }
  //   return user;
  // }

  // pullMessage(arrayIndex, arrayMessage) {
  //   const message = this.state.messagesBy10[0][0][1];

  //   return message;
  // }

  // This should find the users actual Displayname instead of using their username, will require the UserDataService to access the user's data and grab their user displayname. Secondary and not a primary objective at the moment.
  //  handleDisplayName

  render() {
    return (
      <div>
        {props.messagesBy10[0]} Outside
        {/* {props.pullUser()} */}
        <br />
        {/* <div>{props.messagesBy10[(props.value, 1)]}</div> */}
      </div>
    );
  }
}

export default GetMessages;
