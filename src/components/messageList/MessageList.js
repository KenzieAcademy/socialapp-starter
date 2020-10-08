import React from "react";
import Message from "../message/Message";
import DataService from "../../DataService";
import CreateMessage from "../createMessage/CreateMessage";
import "./MessageList.css";
import { ReloadOutlined } from "@ant-design/icons";

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loading: 0,
      isSubmitted: false,
      refresh: false,
      offset: 0,
      prevVert: 0,
      limit: 10,
    };
    this.client = new DataService();
  }

  componentDidMount() {
    this.client.getAllMessagesData(15, this.state.offset).then((response) => {
      this.setState({ messages: response.data.messages });
      console.log(response);
      this.setState({ loading: false });
    });
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.01,
    };

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevVert > y) {
      const lastOffset = this.state.messages.length;
      const curOffset = lastOffset + this.state.offset;
      const curMessageArray = this.state.messages;
      this.setState({ loading: true });
      this.client
        .getAllMessagesData(this.state.limit, curOffset)
        .then((response) => {
          response.data.messages.forEach((msgObj) => {
            curMessageArray.push(msgObj);
          });
          this.setState({ curMessageArray, loading: false });
        });
      this.setState({ offset: curOffset });
    }
    this.setState({ prevVert: y });
  }

  handleSubmit = () => {
    this.setState((state) => {
      return { isSubmitted: !state.isSubmitted };
    });
  };

  handleRefresh = () => {
    this.setState({ refresh: true });
    this.client.getAllMessagesData().then((response) => {
      this.setState({
        messages: response.data.messages,
      });
      this.setState({ refresh: false });
    });
  };

  render() {
    if (!this.state.messages || this.state.refresh) {
      return (
        <div className="MessageList">
          <CreateMessage
            isSubmitted={this.state.isSubmitted}
            handleSubmit={this.handleSubmit}
            handleRefresh={this.handleRefresh}
          />
          <h1>MessageList</h1>
          <h3>Loading...</h3>
        </div>
      );
    }

    if (!this.state.isSubmitted) {
      return (
        <div className="MessageList">
          <CreateMessage
            isSubmitted={this.state.isSubmitted}
            handleSubmit={this.handleSubmit}
          />
          <h1>Message Feed</h1>
          <button onClick={this.handleRefresh}>
            <ReloadOutlined />
          </button>
          <div className="MessageList-messages">
            <ul>
              {this.state.messages.map((msgObj) => (
                <Message
                  keyId={msgObj.id}
                  {...msgObj}
                  handleRefresh={this.handleRefresh}
                />
              ))}
              <div ref={(loadingRef) => (this.loadingRef = loadingRef)}>
                <span>Loading...</span>
              </div>
            </ul>
          </div>
        </div>
      );
    } else
      return (
        <div className="MessageList">
          <CreateMessage
            isSubmitted={this.state.isSubmitted}
            handleSubmit={this.handleSubmit}
            handleRefresh={this.handleRefresh}
          />
          <h1>Message Feed</h1>
          <button onClick={this.handleRefresh}>
            <ReloadOutlined />
          </button>
          <div className="MessageList-messages">
            <ul>
              {this.state.messages.map((msgObj) => (
                <Message
                  keyId={msgObj.id}
                  {...msgObj}
                  handleRefresh={this.handleRefresh}
                />
              ))}
              <div ref={(loadingRef) => (this.loadingRef = loadingRef)}>
                <span>Loading...</span>
              </div>
            </ul>
          </div>
        </div>
      );
  }
}

export default MessageList;
