import React from "react";
import GetDisplayName from "../getDisplayName/GetDisplayName";
import LikeButton from "../likeButton/LikeButton";
import DeleteMessage from "../deleteMessage/DeleteMessage";
import UnlikeButton from "../unlikeButton/UnlikeButton";
class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLiked: false, likeId: 0, didCreate: false };
  }

  handleLikeStatus = (likeId) => {
    this.setState((state) => {
      return { isLiked: !state.isLiked, likeId };
    });
  };

  handleCreationStatus = () => {
    this.setState((state) => {
      return { didCreate: !state.didCreate };
    });
  };

  componentDidMount() {
    let loginData = JSON.parse(localStorage.getItem("login"));
    {
      this.props.likes.forEach((likeObj) => {
        if (likeObj.username === loginData.result.username) {
          this.setState({ isLiked: true, likeId: likeObj.id });
        }
      });
    }
    if (this.props.username === loginData.result.username) {
      this.setState((state) => {
        return { didCreate: !state.didCreate };
      });
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
            At {new Date(this.props.createdAt).toDateString()} posted:
            <GetDisplayName username={this.props.username} />
            <div className="message-text">{this.props.text} </div>
            <LikeButton
              messageId={this.props.id}
              handleLikeStatus={this.handleLikeStatus}
              handleRefresh={this.props.handleRefresh}
            />
            <div className="likes">Likes: {this.props.likes.length}</div>
          </li>
        );
      } else {
        return (
          <li key={this.props.keyId} className="Message">
            At {new Date(this.props.createdAt).toDateString()} posted:
            <GetDisplayName username={this.props.username} />
            <div className="message-text">{this.props.text} </div>
            <UnlikeButton
              likeId={this.state.likeId}
              handleLikeStatus={this.handleLikeStatus}
            />
            <div className="likes">Likes: {this.props.likes.length}</div>
          </li>
        );
      }
    } else {
      if (!this.state.isLiked) {
        return (
          <li key={this.props.keyId} className="Message">
            At {new Date(this.props.createdAt).toDateString()} posted:
            <GetDisplayName username={this.props.username} />
            <div className="message-text">{this.props.text} </div>
            <LikeButton
              messageId={this.props.id}
              handleLikeStatus={this.handleLikeStatus}
            />
            <div className="likes">Likes: {this.props.likes.length}</div>
            <DeleteMessage
              messageId={this.props.id}
              handleCreationStatus={this.handleCreationStatus}
              handleRefresh={this.props.handleRefresh}
            />
          </li>
        );
      } else {
        return (
          <li key={this.props.keyId} className="Message">
            At {new Date(this.props.createdAt).toDateString()} posted:
            <GetDisplayName username={this.props.username} />
            <div className="message-text">{this.props.text} </div>
            <UnlikeButton
              likeId={this.state.likeId}
              handleLikeStatus={this.handleLikeStatus}
            />
            <div className="likes">Likes: {this.props.likes.length}</div>
            <DeleteMessage
              messageId={this.props.id}
              handleCreationStatus={this.handleCreationStatus}
              handleRefresh={this.props.handleRefresh}
            />
          </li>
        );
      }
    }
  }
}

export default Message;
