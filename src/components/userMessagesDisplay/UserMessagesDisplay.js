import React from "react"
import { Feed, Icon, Loader } from "semantic-ui-react";
import MessageService from "../../services/MessageService";
import DataService from "../../services/DataService"
import Message from "../messages/Message"
import "./UserMessagesDisplay.css"

class UserMessagesDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] };
        this.loggedInUser = new DataService().getUsername();
      }
    
      componentDidMount() {
        MessageService.obtainUserMessages(this.loggedInUser).then((response) => {
          this.setState({ messages: response.data.messages });
          console.log(response.data.messages);
        });
      }
    
      render() {
        if (this.state.messages.length === 0) {
          return (
            <div className="messageList">
              <h1>Message List</h1>
              <Loader size="massive" active />
              <h3>Loading...</h3>
            </div>
          );
        }
        return (
          <div className="UserMessagesDisplay">
            <h1>Message List</h1>
            <ul>
              <Feed>
                {this.state.messages.map((messageObject) => (
                  <Message
                    key={messageObject.id}
                    {...messageObject}
                    loggedInUser={this.loggedInUser}
                  />
                ))}
              </Feed>
            </ul>
          </div>
        );
      }
}

export default UserMessagesDisplay