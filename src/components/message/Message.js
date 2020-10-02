import React from "react";
import DataService from "../../dataService";
import { Link, Route } from "react-router-dom";
import profilepic from "../defualtpicture/freeiconlibrary.jpg";
import "./Message.css";
class Message extends React.Component {
  constructor(props) {
    super(props);
    // const client = new DataService();

    this.client = new DataService();
    this.state = {
      likeCount: this.props.likes.length,
      picture: null,
      // username: this.props.username,
      // picture: "",
    };
  }
  // let temp = this.client.getUsername();
  // this.setState({ username: temp });

  handleLike = () => {
    // const client = new DataService();
    const username = this.client.getUsername();
    if (this.props.likes.some((like) => like.username === username)) return;
    this.client.postLike(this.props.id).then((like) => {
      // console.log("liked");
      this.setState((newState) => ({ likeCount: newState.likeCount + 1 }));
    });
    // .catch(() => {
    //   alert("Already liked");
    // });
  };

  componentDidMount() {
    const usrnme = this.props.username;
    // console.log(usrnme);
    console.log(usrnme);
    this.client
      .getPicture(usrnme)
      .then((result) => {
        console.log(result);
        this.setState({
          picture: `https://socialapp-api.herokuapp.com/users/${usrnme}/picture`,
        });
      })
      .catch((result) => {
        this.setState({
          picture: profilepic,
        });
      });
  }

  render() {
    return (
      <li className="Message">
        <Route>
          <Link to="/SearchUser">
            <img style={{ width: "60px", height: "60px", borderRadius: "50px", listStyleType: "none" }}
              className="userprofile"
              alt="user-pic"
              src={this.state.picture}
            />
          </Link>
        </Route>
        {/* <img className="userprofile" alt="user-pic" src={this.state.pic} /> */}
    At { this.props.createdAt}, { this.props.username} posted:
        { console.log(this.prop)}
        <br />
        { this.props.text}
        <br />
        <div className="like-counter">😊{this.props.likes.length}</div> {/* <form> */}
        <button onClick={this.handleLike}>👍</button>
        {/* </form> */}
      </li >
    );
  }
}
export default Message;
