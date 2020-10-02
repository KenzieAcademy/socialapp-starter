import React from "react";
import DataService from "../../dataService";
import { Link, Route } from "react-router-dom";
import profilepic from "../defualtpicture/freeiconlibrary.jpg";
// import "./Message.css"

class Message extends React.Component {
  constructor(props) {
    super(props);
    // const client = new DataService();

    this.client = new DataService();
    this.state = {
      likeCount: this.props.likes.length,
      pic: "",
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
    this.client
      .postLike(this.props.id)
      .then((like) => {
        // console.log("liked");
        this.setState((newState) => ({ likeCount: newState.likeCount + 1 }));
      })
      .catch(() => {
        alert("Already liked");
      });
  };

  getpic(username) { }
  componentDidMount() {
    const usrnme = this.props.username;
    // console.log(usrnme);
    console.log(usrnme);
    this.client
      .getPicture(usrnme)
      .then((result) => {
        console.log(result);
        this.setState({
          pic: result.data,
        });
        // const client = new DataService();
        //   .getPicture(username)
        //   .then((response) => this.setState({ picture: response.data.picture }));
      })
      .catch(this.setState({ pic: profilepic }));
  }
  render() {
    return (
      <li className="Message">
        {/* {console.log(this.props)} */}
        {/* {console.log(this.state.pic)} */}
        {/* {getpic()}({this.state.pic}) =>{" "}
        <img src={`data:image/jpeg;base64,${this.state.pic}`} /> */}
        <Route>
          <Link to="/SearchUser">
            <img style={{ width: "60px", height: "60px", borderImage: 'repeat' }} className="userprofile" alt="user-pic" src={this.state.pic} />
          </Link>
        </Route>
        {/* <img className="userprofile" alt="user-pic" src={this.state.pic} /> */}
        At {this.props.createdAt},{this.props.username} posted:
        {console.log(this.prop)}
        <br />
        {this.props.text}
        <br />
        <div className="like-counter">😊{this.props.likes.length}</div> {/* <form> */}
        <button onClick={this.handleLike}>👍</button>
        {/* </form> */}
      </li>
    );
  }
}
export default Message;
