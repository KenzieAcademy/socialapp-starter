import React from "react";

class Message extends React.Component {
<<<<<<< HEAD
    render() {
        return (
            <li className="Message">
                At {new Date(this.props.createdAt).toDateString()},
                {this.props.username} posted:
                <div className="message-text">{this.props.text}</div>
                <div className="likes">Likes: {this.props.likes.length}</div>
            </li>
        )
    }
=======
  render() {
    return (
      <li className="Message">
        At {new Date(this.props.createdAt).toDateString()},
        {this.props.username} posted:
        <div className="message-text">{this.props.text}</div>
        <div className="likes">Likes: {this.props.likes.length}</div>
      </li>
    )
  }
>>>>>>> master
}


export default Message