import React from "react";
import DataService from "../../../dataService";
import { userIsAuthenticated } from "../../../redux/HOCs";
// import './MessageFeed.css'

// import { message, Result } from "antd";
import Message from "../../../components/message/Message";
import CreateMessage from "../../../pages/CreateMessage";
import { message } from "antd";
import { List } from "antd/lib/form/Form";

class PSM extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
  }

  state = { messages: [], usermessages: [] };

  componentDidMount() {
    this.client.getMessages().then((response) =>
      this.setState({
        messages: response.data.messages,
      })
    );
    console.log(this.state.messages);

    const newArray = this.state.messages.filter(
      () => this.state.messages != this.client.getUsername()
    );
    console.log(newArray);
    // this.setState(() => {
    //   this.usermessages = this.state.messages.filter(
    //     () => this.state.message.username !== this.getusername()
    //   );
    // });
    console.log(this.state.messages);
  }

  //   shouldComponentUpdate(){
  //     let result = messages.filter(() => this.messages.user === this.message.usersmessages)
  //
  // this.setState({

  // })
  //}

  // this.client
  // .getMessages()
  // .then((response) => this.setState({ messages: response.data.messages }));
  //}

  // setInterval(componentDidMount(), 5000);
  render() {
    console.log(this.state.messages);
    console.log(this.client.getUsername());
    // this.setState(() => {
    //   this.state.usermessages = this.state.messages.filter(
    //     () => this.state.message === this.client.getUsername()
    //   );
    // });

    console.log(this.state.usermessages);

    console.log(this.state.messages);
    if (this.state.usermessages.length === 0) {
      return (
        <div className="loading">
          <h3>loading</h3>
        </div>
      );
    }
    // return (
    //   <div style={{ fontSize: "25px", fontStyle: "inherit", fontFamily: "revert" }} className="messagefeed" >
    //     {/* <Menu isAuthenticated={this.props.isAuthenticated} /> */}
    //     {/* messages go here test */}

    return (
      <div className="messagefeed">
        {/* {console.log(this.props)} */}
        {/* <CreateMessage /> */}
        <ul>
          {this.state.usermessages.map((messageObject) => (
            <Message key={messageObject.id} {...messageObject} />
          ))}
          {/* {console.log(this.props)} */}
        </ul>
      </div>
    );
  }
}

export default userIsAuthenticated(PSM);
