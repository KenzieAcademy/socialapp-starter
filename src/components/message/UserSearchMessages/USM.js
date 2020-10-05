import React from "react";
import DataService from "../../../dataService";
import { userIsAuthenticated } from "../../../redux/HOCs";
// import './MessageFeed.css'

// import { message, Result } from "antd";
import Message from "../../../components/message/Message";
import { message } from "antd";

class MessageFeed extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
  }

  state = { messages: [], usermessages: [] };

  componentDidMount() {
    this.client.getMessages(1000).then((response) =>
      this.setState({
        messages: response.data.messages,
      })
    );
  }

  // this.client
  // .getMessages()
  // .then((response) => this.setState({ messages: response.data.messages }));
  //}

  // setInterval(componentDidMount(), 5000);
  render() {
    // if (this.state.usermessages.length === 0) {
    //   return (
    //     <div className="loading">
    //       <h3>No Messages</h3>
    //     </div>
    //   );
    // }

    // return (
    //   <div style={{ fontSize: "25px", fontStyle: "inherit", fontFamily: "revert" }} className="messagefeed" >
    //     {/* <Menu isAuthenticated={this.props.isAuthenticated} /> */}
    //     {/* messages go here test */}

    return (
      <div className="messagefeed">
        {this.props.name}
        <ul>
          {this.state.usermessages.map((messageObject) => (
            <Message key={messageObject.id} {...messageObject} />
          ))}
        </ul>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
