import React from "react";
import Menu from "../components/menu/Menu";
//import { userIsAuthenticated } from "../redux/HOCs";

class MessageList extends React.Component {
  render() {
    return (
      <div className="MessageList">
        <Menu />
        <h1>Message Feed</h1>
        <ul></ul>
      </div>
    );
  }
}

export default MessageList;
