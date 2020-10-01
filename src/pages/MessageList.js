import React from "react";
import Menu from "../components/menu/Menu";
import Api from "../pages/dataService";
import { userIsAuthenticated } from "../redux/HOCs";
import Message from "../components/message/Message";
import MessageFeed from "../components/messagefeed/MessageFeed";
import MessageInbox from "../components/messageinbox/MessageInbox";

import InfiniteScroll from "react-infinite-scroller";

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.client = new Api();
    this.state = {
      messages: [],
      error: false,
      hasMore: true,
      isLoading: false,
      offset: 20,
    };
  }

  componentDidMount() {
    this.client.getMessages().then((response) => {
      const messages = response.data.messages;
      this.setState({ messages });
      console.log(response);
    });
  }

  // pullMessages() {
  //   return this.client.getMessages();
  // }

  loadMessages = () => {
    this.client.getMoreMessages(this.state.offset).then((response) => {
      const newMessages = response.data.messages;
      this.setState((currentState) => {
        let offset = currentState.offset + 20;
        let messages = [...currentState.messages, ...newMessages];
        return { offset, messages };
      });
    });
  };

  render() {
    const { messages } = this.state;

    if (messages.length === 0) {
      return (
        <div className="MessageList">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <h1>MessageList</h1>
          <h3>LOADING...</h3>
        </div>
      );
    }
    return (
      <div className="MessageList">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h1>Message Feed</h1>
        <MessageInbox />
        <ul>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadMessages}
            hasMore={true || false}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            {messages.map((messageObject) => {
              return (
                <Message
                  messageId={messageObject.id}
                  key={messageObject.id}
                  {...messageObject}
                />
              );
            })}
          </InfiniteScroll>
        </ul>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageList);
