import React from "react";
import Menu from "../components/menu/Menu";
import Api from "../pages/dataService";
import { userIsAuthenticated } from "../redux/HOCs";
import Message from "../components/message/Message";

import InfiniteScroll from "react-infinite-scroller";
import MessageForm from "../components/messageForm/MessageForm";

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
      text: "",
    };
  }

  componentDidMount() {
    this.client.getMessages().then((response) => {
      const messages = response.data.messages;
      this.setState({ messages });
    });
  }

  createMessage = (event) => {
    event.preventDefault();
    this.client.createMessage(this.state.text).then((response) => {
      console.log(response.data.message);
      this.setState((currentState) => {
        let messages = [response.data.message, ...currentState.messages];
        return { messages };
      });
    });
  };
  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

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
        <p>Message</p>

        <MessageForm
          text={this.state.text}
          handleChange={this.handleChange}
          createMessage={this.createMessage}
        />
        <ul>
          <InfiniteScroll
            text={this.state.text}
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
