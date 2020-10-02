import React from "react";
// import userIsAuthenticated from "../../redux/HOCs"
class Message extends React.Component {
  handleError = (event) => {
    event.target.src =
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-ZzOpik5sFZg%2FUleI27zMJyI%2FAAAAAAAAHgs%2FnQEZnjiSn9M%2Fs1600%2Fprofileicon.jpg&f=1&nofb=1";
  };
  render() {
    return (
      <li className="Message">
        <img
          width={100}
          height={100}
          src={
            "https://socialapp-api.herokuapp.com/users/" +
            this.props.username +
            "/picture"
          }
          alt="Profile"
          onError={this.handleError}
        />
        At {new Date(this.props.createdAt).toDateString()},{this.props.username}{" "}
        posted:
        <div className="message-text">{this.props.text}</div>
        <div className="likes">Likes: {this.props.likes.length}</div>
      </li>
    );
  }
}

export default Message;
