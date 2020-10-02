import React from "react";
import Card from "react-bootstrap/Card";
import "../message/Message.css";
import ProfilePic from "../../assets/images/Placeholder_Image.gif";
import Image from "react-bootstrap/Image";
import { userIsAuthenticated } from "../../redux/HOCs";

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: this.props.likes.length,
      user: this.props.username,
      displayName: "loading",
      profilePic: ProfilePic,
    };
  }
  componentDidMount() {
    this.updateUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.username !== this.props.username) {
      this.updateUser();
    }
  }

  updateUser() {
    this.props.api.getUser(this.props.username).then((response) =>
      this.setState({
        user: response.data.user.username,
        displayName: response.data.user.displayName,
        profilePic: response.data.user.pictureLocation,
      })
    );
  }

  LikeFunction = () => {
    let messageID = { messageId: this.props.id };
    this.props.api
      .addLike(messageID)
      .then(this.setState({ likes: this.state.likes + 1 }));
  };

  render() {
    let postedAt = new Date(this.props.createdAt);
    postedAt = postedAt.toUTCString();
    let picture = ProfilePic;
    if (this.state.profilePic !== null) {
      picture = `https://socialapp-api.herokuapp.com${this.state.profilePic}`;
    }

    return (
      <div className="CardBody">
        <Card style={{ width: "575px" }}>
          <Card.Body className="Message">
            <Image
              className="ProfilePic"
              src={picture}
              alt="Profile Pic"
              name={this.props.username}
              onClick={this.props.selectUserToDisplay}
            />
            <div className="MemberTitle">
              <Card.Title> Member: {this.state.displayName}</Card.Title>
            </div>
            <div className="PostedTitle">
              <Card.Subtitle className="mb-2 text-muted">
                {postedAt}
              </Card.Subtitle>
              {/* </div> */}
              <Card.Text className="MessageTextBox">
                {this.props.text}
              </Card.Text>
              <footer>
                {" "}
                <div className="ThumbsUpNumber">
                  <div className="ThumbsUp">
                    Thumbs Up: {this.props.likes.length}
                  </div>{" "}
                </div>
                <button className="ThumbsUpButton" onClick={this.LikeFunction}>
                  Thumbs Up!
                </button>{" "}
              </footer>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Message;
