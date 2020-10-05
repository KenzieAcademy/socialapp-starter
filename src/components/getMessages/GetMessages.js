import React from "react";
import DataService from "../../dataService";
import "./GetMessages.css";
import Message from "../message/Message";
import { userIsAuthenticated } from '../../redux/HOCs';
import InfiniteScroll from "react-infinite-scroll-component"

class GetMessages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    };
    this.client = new DataService();
  }


  componentDidMount() {
    new DataService()
      .getRecentMessages()
      .then(messages => {
        this.setState({ messages })
      })
  }

  render() {
    if (this.state.messages.length === 0) {
      return (
        <div className="MessageFeed">
          <h2>Message Feed</h2>
          <h3>Loading...</h3>
        </div>
      )
    }
    return (
      <InfiniteScroll dataLength={this.state.messages.length} next={this.getRecentMessages} hasMore={true}>
        <div className="MessageFeed">
          <ul>
            {this.state.messages.map(msg => <Message key={msg.id} {...msg} />)}
          </ul>
        </div>
      </InfiniteScroll>
    )
  }
}

export default userIsAuthenticated(GetMessages);