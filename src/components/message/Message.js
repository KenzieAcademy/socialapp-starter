import React from "react";
// import Image from "../../assets/images/Placeholder_Image.gif";
// import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../message/Message.css";
import ProfilePic from "../../assets/images/Placeholder_Image.gif";
import SocialappService from "../../socialappService";
import Image from "react-bootstrap/Image";


class Message extends React.Component {
  constructor(props) {
    super(props);
    this.api = new SocialappService();
    this.state = { user: {}, date: "", userPic: ProfilePic };
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

  LikeFunction() {
    return <img alt="like" src=""></img>; //Sometype of image thumbnail
  }
  render() {
    if (this.state.userPic === "User does not have a picture") {
      this.setState({ userPic: MiniProfileIMG });
    }
    return (
      <div className="CardBody">
        <Card style={{ width: "575px" }}>
          <Card.Body className="Message">
            <img className="ProfilePic" src={this.state.userPic} alt="Profile Pic" />
            <div className="ProfileLink">
              <Link to="/miniProfile">Check Out My Profile</Link>
            </div>
            <div className="MemberTitle">
              <Card.Title> Member: {this.state.user.displayName}</Card.Title>
            </div>
            <div className="PostedTitle">
              <Card.Subtitle className="mb-2 text-muted">
                this.state.date
              </Card.Subtitle>
            </div>
            <Card.Text className="MessageText">{this.props.text}</Card.Text>
            <footer>
              {" "}
              <div className="LikesNumber">
                <div className="Likes">Likes: {this.props.likes.length}</div>{" "}
              </div>
              <button className="LikeButton" onClick={this.LikeFunction}>
                LIKE MY POST!
              </button>{" "}
              {/* <div className="LikeButton">
                <input type="submit" value="" onClick={this.LikeFunction} />{" "}
              </div> */}
            </footer>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Message;
