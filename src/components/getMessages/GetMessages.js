import React from "react";
import MessageService from "../../services/MessageService";
// import UserDataService from "../../services/UserDataService";
// Using the UserDataService to find the user then have the user's Display Name be used instead of using the Username temporarily on hold until Message works

class GetMessages extends React.Component {
  constructor(props) {
    super(props);
    this.MessageService = new MessageService();
    this.state = {
      messages: { messages: [] },
      messagesBy10: [],
    };
  }
  // This should grab all the messages and place them into the messages Array
  handleGetMessages = (event) => {
    event.preventDefault;
    this.MessageService.obtainMessages().then((result) => {
      this.setState({
        messageLogArray: result,
      });
    });
  };

  // This should organize the messages into groups for pagination component? By 10 only Requires more research!
  //  handleDisplayMessages = (event) => {
  //
  //  }

  // This should find the users actual Displayname instead of using their username, will require the UserDataService to access the user's data and grab their user displayname. Secondary and not a primary objective at the moment.
  //  handleDisplayName

  render() {
    return <GetMessages />;
  }
}

export default GetMessages;
