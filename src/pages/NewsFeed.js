import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/menu/Menu";
import DataService from "../dataService";
import GetMessages from "../components/getMessages/GetMessages";

class NewsFeed extends React.Component {
  client = new DataService();
  state = { messages: [] };

  componentDidMount() {
    this.client
      .getMessages()
      .then((response) => this.setState({ messages: response.data.messages }));
  }
  render() {
    if (this.state.messages.length === 0) {
      return (
        <div className="NewsFeed">
          <h1> NewsFeed</h1>
          <ul></ul>
          <h3>LOADING...</h3>
        </div>
      );
    }

    return (
      <div className="NewsFeed">
        <Menu />
        <div id="menu-links">
          <Link to="/">Home</Link>
          <Link to="/" onClick={this.handleLogout}>
            Logout
          </Link>
        </div>
        <h1>NewsFeed</h1>
        <GetMessages />
      </div>
    );
  }
}

export default NewsFeed;
