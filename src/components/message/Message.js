import React from "react";
// import Image from "../../assets/images/Placeholder_Image.gif";
// import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../message/Message.css";
import ProfilePic from "../../assets/images/Placeholder_Image.gif";
<<<<<<< HEAD
<<<<<<< HEAD
// import Image from "react-bootstrap/Image";
// import { userIsAuthenticated } from "../../redux/HOCs";
=======
import SocialappService from "../../socialappService";
import Image from "react-bootstrap/Image";
=======
import SocialappService from "../../socialappService";
>>>>>>> parent of a015c11... Merge branch 'master' into Mark
import { userIsAuthenticated } from "../../redux/HOCs";
>>>>>>> parent of 7b5762f... Merge pull request #60 from BenLynch87/Ben

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.api = new SocialappService();

    this.state = {
      user: {},
      date: "",
<<<<<<< HEAD
=======
      userPic: ProfilePic,
>>>>>>> parent of a015c11... Merge branch 'master' into Mark
      likes: this.props.likes.length,
    };
  }

  componentDidMount() {
    this.api
      .getUser(this.props.username)
      .then((response) => this.setState({ user: response.data.user }));
    const postedAt = new Date(this.props.createdAt);
    this.setState({ date: postedAt.toUTCString() });
    // this.api
    //   .getProfilePic(this.props.username)
    //   .then((response) => this.setState({ userPic: response.data.message }));
  }

  LikeFunction = () => {
    let messageID = { messageId: this.props.id };
    this.api
      .addLike(messageID)
      .then(this.setState({ likes: this.state.likes + 1 }));
  };

  render() {
<<<<<<< HEAD
    let picture = ProfilePic;
    if (this.state.user.pictureLocation !== null) {
      picture = `https://socialapp-api.herokuapp.com${this.state.user.pictureLocation}`;
    }

    return (
<<<<<<< HEAD
=======
    // if (this.state.userPic === "User does not have a picture") {
    //   this.setState({ userPic: ProfilePic });
    // }
    return (
>>>>>>> parent of a015c11... Merge branch 'master' into Mark
      <div className="MessageBody">
        <div className="MessageCardBody">
          <Card className="MessageCard" style={{ width: "620px" }}>
            <Card.Body className="Message">
              <img className="ProfilePic" src={ProfilePic} alt="Profile Pic" />
              <div className="MessageMemberTitle">
                <Card.Title> Member: {this.props.username}</Card.Title>
              </div>
              {/* <div className="PostInfo"> */}
<<<<<<< HEAD
              <Card.Subtitle className="mb-2 text-muted">
                {new Date(this.props.createdAt).toDateString}{" "}
=======
      <div className="CardBody">
        <Card style={{ width: "575px" }}>
          <Card.Body className="Message">
            <Image className="ProfilePic" src={picture} alt="Profile Pic" />
            <div className="MemberTitle">
              <Card.Title> Member: {this.state.user.displayName}</Card.Title>
            </div>
            <div className="PostedTitle">
              <Card.Subtitle className="mb-2 text-muted">
                {this.state.date}
>>>>>>> parent of 7b5762f... Merge pull request #60 from BenLynch87/Ben
=======
              <Card.Subtitle className="mb-2 text-muted">
                {new Date(this.props.createdAt).toDateString}{" "}
>>>>>>> parent of a015c11... Merge branch 'master' into Mark
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
