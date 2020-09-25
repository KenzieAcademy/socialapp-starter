import React, { Component } from "react";
import Spinner from "react-spinkit";
import DataService from "../../pages/dataService";

class MessageFeed extends Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
    this.state = {
      data: [],
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
        data: result.data[0],
      });
    });
  }
  render() {
    const { loading, error } = this.props;
    return (
      <div className="newsFeed">
        <Logout />
        {this.state.data}
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default MessageFeed;
