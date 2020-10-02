import React from "react";
import DataService from "../../dataService";
import { Link, Route } from "react-router-dom";
import profilepic from "../defualtpicture/freeiconlibrary.jpg";

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
          pic: result.data,
        });
      })
      .catch(this.setState({ pic: profilepic }));
  }

  render() {
    return (
      <li className="Message">
        <Route>
          <Link to="/SearchUser">
            <img className="userprofile" alt="user-pic" src={this.state.pic} />
          </Link>
        </Route>
        {/* <img className="userprofile" alt="user-pic" src={this.state.pic} /> */}
        At {this.props.createdAt},{this.props.username} posted:
        {console.log(this.prop)}
        <br />
        {this.props.text}
        <br />
        <div className="like-counter">Likes {this.props.likes.length}</div>
        {/* <form> */}
        <button onClick={this.handleLike}>Button</button>
        {/* </form> */}
      </li>
    );
  }
}
export default Message;
