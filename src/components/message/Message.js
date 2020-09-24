import React from "react";
import DataService from "../../services/DataService/DataService";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: this.props.likes.length,
      like: null,
    };

    this.client = new DataService();
  }

  componentDidMount() {
    let userData = JSON.parse(localStorage.getItem("login"));
    let user = userData.result.username;
    let usersLiked = this.props.likes.find(
      (object) => object.username === user
    );
    if (usersLiked) {
      this.setState({ like: usersLiked });
    }
  }

  handleLike = (event) => {
    if (this.state.like != null) {
      return console.log("Already liked");
    }
    let likeTarget = { messageId: Number(event.target.id) };
    return this.client.likeMessage(likeTarget).then((result) => {
      this.setState((state) => ({
        likeCount: this.state.likeCount + 1,
        like: result.data.like,
      }));
    });
  };

  removeLike = (event) => {
    if (this.state.like === null) {
      return console.log("I'm afraid you can't do that yet");
    }
    return this.client.unlikeMessage(this.state.like.id).then((result) => {
      this.setState((state) => ({
        likeCount: this.state.likeCount - 1,
        like: null,
      }));
    });
  };

  render() {
    return (
      <div className="message">
        <h5>{this.props.username}</h5>
        <p>
          {this.props.text} Likes:{this.state.likeCount}
        </p>
        <button id={this.props.id} onClick={this.handleLike}>
          &#10084;
        </button>
        <button onClick={this.removeLike}>Unlike</button>
      </div>
    );
  }
}

export default Message;
