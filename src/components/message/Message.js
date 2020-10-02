import React from "react";
import "./Message.css";
import { Link } from "react-router-dom";
import { Card } from "antd";
import DataService from "../../services/DataService/DataService";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: this.props.likes.length,
      like: null,
      deleted: false,
      profileLink: `/profile/${this.props.username}`,
    };

    this.client = new DataService();
  }

  componentDidMount() {
    let userData = JSON.parse(localStorage.getItem("login"));
    let user = userData.result.username;
    this.client.getUserPicture(this.props.username).then((result) => {
      this.setState({
        userImg: result.config.url,
      });
    });
    let usersLiked = this.props.likes.find(
      (object) => object.username === user
    );
    if (usersLiked) {
      this.setState({ like: usersLiked });
    }
  }
  deleteMessage = (event) => {
    event.preventDefault();
    return this.client
      .deleteMessage(this.props.id)
      .then((result) => this.setState({ deleted: true }));
  };

  determineLikeUnlike = (e) => {
    if (this.state.like != null) {
      return this.removeLike(e);
    }
    return this.handleLike(e);
  };

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
    let Delete = "";
    let profileImage =
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
    if (this.state.userImg) {
      profileImage = this.state.userImg;
    }
    let userData = JSON.parse(localStorage.getItem("login"));
    if (userData.result.username === this.props.username) {
      Delete = (
        <button className="deleteMessageButton" onClick={this.deleteMessage}>
          Delete Message
        </button>
      );
    }
    if (this.state.deleted === true) {
      return <div></div>;
    }
    return (
      <div className="message">
        <Card
          className="messageCard"
          title={
            <Link to={this.state.profileLink}>
              <div className="messageUser">
                <img className="avatar" src={profileImage} alt="avatar" />
                <h5 className="messageUsername">{this.props.username}</h5>
              </div>
            </Link>
          }
          style={{ width: 300 }}
        >
          <p className="messageText">{this.props.text}</p>
          <p className="messageLikeZone">
            {" "}
            <span className="likestext"> Likes: {this.state.likeCount}</span>
          </p>
          <p className="messageButtonZones">
            <button
              className="likebutton"
              id={this.props.id}
              onClick={this.determineLikeUnlike}
            >
              &#10084;
            </button>

            {Delete}
          </p>
        </Card>
        {/* <div className="profileLinkSpace">
          <Link to={this.state.profileLink}>
            <div className="messageUser">
              <img className="avatar" src={profileImage} alt="avatar" />
              <h5>{this.props.username}</h5>
            </div>
          </Link>
        </div>
        <p>
          {this.props.text}{" "}
          <span className="likestext"> Likes:{this.state.likeCount}</span>
        </p>
        <button
          className="likebutton"
          id={this.props.id}
          onClick={this.determineLikeUnlike}
        >
          &#10084;
        </button>

        {Delete} */}
      </div>
    );
  }
}

export default Message;
