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
    this.client.getMessages(1500).then((response) =>
      this.setState({
        messages: response.data.messages,
      })
    );
    console.log(this.state.messages.username);

    //  this.setState(() => {
    //    this.usermessages = state.messages.filter(() => this.state.message !== );
    //   });

    // console.log(this.state.usermessages);
  }
  //};
  // this.usermessages = this.messages.filter(
  //   this.state.username === this.props.username
  // );

  // this.client
  // .getMessages()
  // .then((response) => this.setState({ messages: response.data.messages }));
  //}

  // setInterval(componentDidMount(), 5000);
  render() {
    return (
      <div className="messagefeed">
        {/* {this.props.name} */}
        {/* {JSON.stringify(this.state.messages)} */}
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
