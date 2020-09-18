import React from "react";
import DataService from "../dataService";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
// import Message from "";
import { Result } from "antd";

class MessageFeed extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
  }

  state = { messages: [] };

  //   state = { messages: [] };

  componentDidMount() {
    const test = this.client.getMessages();
    console.log(test);
    //then((response) =>
    //this.setState({ messages: response.data.messages })
    //);
  }
  render() {
    if (this.state.messages.length === 0) {
      return (
        <div className="loading">
          <h3>loading</h3>
        </div>
      );
    }
    return (
      <div className="messagefeed">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        messages go here
        <ul></ul>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
