import React, { Component } from "react";
import "../components/assets/stylesheets/Messages.css";

class Messages extends Component {
  render() {
    return (
      <div className="messages-bg">
        <div className="MessagesDiv">
          <h1>Our Messages go on this page</h1>
        </div>
        <div className="MessageBoard">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores in
          doloribus corporis eaque enim, officiis, commodi natus itaque
          asperiores numquam incidunt debitis animi saepe impedit recusandae
          pariatur molestiae delectus explicabo!
        </div>
      </div>
    );
  }
}

export default Messages;
