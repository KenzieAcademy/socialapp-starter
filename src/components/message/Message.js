import React from "react";
import GetDisplayName from "../getDisplayName/GetDisplayName";
import LikeButton from "../likeButton/LikeButton";
import DeleteMessage from "../deleteMessage/DeleteMessage";
class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLiked: false, likes: [], didCreate: false };
  }

  componentDidMount() {
    let loginData = JSON.parse(localStorage.getItem("login"));
    {
      this.props.likes.forEach((likeObj) => {
        if (likeObj.username === loginData.result.username) {
          this.setState({ isLiked: true });
        }
      });
    }
    if (this.props.username === loginData.result.username) {
      this.setState({ didCreate: true });
    }
  }
  render() {
    if (this.props.key) {
      return <div>LOADING</div>;
    }
    if (!this.state.didCreate) {
      if (!this.state.isLiked) {
        return (
          <li key={this.props.keyId} className="Message">
            At {new Date(this.props.createdAt).toDateString()}{" "}
            <GetDisplayName username={this.props.username} /> posted:
            <div className="message-text">{this.props.text} </div>
            <LikeButton
              messageId={this.props.id}
              handleSubmit={this.props.handleSubmit}
            />
            <div className="likes">Likes: {this.props.likes.length}</div>
          </li>
        );
      } else {
        return (
          <li key={this.props.keyId} className="Message">
            At {new Date(this.props.createdAt).toDateString()}{" "}
            <GetDisplayName username={this.props.username} /> posted:
            <div className="message-text">{this.props.text} </div>
            <button>unlike</button>
            <div className="likes">Likes: {this.props.likes.length}</div>
          </li>
        );
      }
    } else {
      if (!this.state.isLiked) {
        return (
          <li key={this.props.keyId} className="Message">
            At {new Date(this.props.createdAt).toDateString()}{" "}
            <GetDisplayName username={this.props.username} /> posted:
            <div className="message-text">{this.props.text} </div>
            <LikeButton
              messageId={this.props.id}
              handleSubmit={this.props.handleSubmit}
            />
            <div className="likes">Likes: {this.props.likes.length}</div>
            <DeleteMessage
              messageId={this.props.id}
              handleSubmit={this.props.handleSubmit}
            />
          </li>
        );
      } else {
        return (
          <li key={this.props.keyId} className="Message">
            At {new Date(this.props.createdAt).toDateString()}{" "}
            <GetDisplayName username={this.props.username} /> posted:
            <div className="message-text">{this.props.text} </div>
            <button>unlike</button>
            <div className="likes">Likes: {this.props.likes.length}</div>
            <DeleteMessage
              messageId={this.props.id}
              handleSubmit={this.props.handleSubmit}
            />
          </li>
        );
      }
    }
  }
}

export default Message;
