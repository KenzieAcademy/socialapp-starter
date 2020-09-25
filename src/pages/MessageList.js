import React from "react";
import Menu from "../components/menu/Menu";
import Api from "../pages/dataService";
import { userIsAuthenticated } from "../redux/HOCs";
import Message from "../components/message/Message";
import debounce from "lodash.debounce";

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.client = new Api();
    this.state = {
      messages: [],
      error: false,
      hasMore: true,
      isLoading: false,
    };
    window.onscroll = debounce(() => {
      const {
        loadMessages,
        state: { error, isLoading, hasMore },
      } = this;

      if (error || isLoading || !hasMore) return;

      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadMessages();
      }
    }, 100);
  }
  componentDidMount() {
    this.loadMessages();
  }

  loadMessages = () => {
    this.setState({ isLoading: true }, () => {
      this.client.getMessages().then((response) => {
        const nextMessages = this.state.messages.map((messageObject) => {
          return (
            <Message
              messageId={messageObject.id}
              key={messageObject.id}
              {...messageObject}
            />
          );
        });

        // Merges the next users into our existing users
        this.setState({
          // Note: Depending on the API you're using, this value may
          // be returned as part of the payload to indicate that there
          // is no additional data to be loaded
          hasMore: this.state.messages.length < 100,
          isLoading: false,
          messages: [this.state.messages, nextMessages],
        });
      });
    });
  };

  render() {
    if (this.state.messages.length === 0) {
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
        <ul>
          {this.state.messages.map((messageObject) => {
            return (
              <Message
                messageId={messageObject.id}
                key={messageObject.id}
                {...messageObject}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageList);
