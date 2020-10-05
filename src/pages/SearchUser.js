import { message } from "antd";
import React from "react";
import DataService from "../dataService";
import "./searchUser.css";
import profilepic from "../components/defualtpicture/freeiconlibrary.jpg";
import MessageFeed from "./MessageFeed";

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();

    this.state = {
      userdata: {
        username: "",
        displayname: "",
        about: "",
        picture: profilepic,
        password: "",
        showMessageFeed: false,
      },
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    this.setState({ username: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.username);
    this.client
      .getUser(this.state.username)
      .then((result) => {
        console.log("user got");
        console.log(result.data);
        if (result.data.picture === null) {
          this.setState({
            username: result.data.user.username,
            displayname: result.data.user.displayName,
            about: result.data.user.about,
            picture: profilepic,
            showMessageFeed: true,
          });
        } else {
          this.setState({
            username: result.data.user.username,
            displayname: result.data.user.displayName,
            about: result.data.user.about,
            picture:
              "https://socialapp-api.herokuapp.com" +
              result.data.user.pictureLocation,
            showMessageFeed: true,
          });
        }
      })
      .catch((result) => {
        this.setState({
          username: "USER DOES NOT EXIST",
          picture: profilepic,
          about: "",
          showMessageFeed: false,
        });
      });
  };

  componentDidMount() {
    this.setState({
      picture: profilepic,
    });
  }
  // .catch((result) =>
  //   this.setState({
  //     username: "USER DOES NOT EXIST"

  //   })
  // )
  // alert("User doesn't Exist"));
  // .catch(alert("User doesn't Exist"));
  // };

  render() {
    // if (searchedUser) {
    //   {
    //     messagefeed <messagefeed>
    //   }
    // } else {
    //   messagefeed = "";
    // }
    return (
      <div>
        <p className="searchHeader">Search User</p>
        {console.log(this.props)}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="SearchUser"
            placeholder="Search User"
            onChange={this.handleChange}
          />
          <button>Search</button>
        </form>
        {console.log(this.state)}
        {this.state.userdisplayName}
        <br></br>
        <div className="serchuserfeed">
          {this.state.username}
          <br></br>
          {this.state.about}
          <br></br>

          {console.log(this.state.userdata.showMessageFeed)}
          <img alt="userimage" width={200} src={this.state.picture} />
          {/* <messagefeed limit="10" mesasgeid={this.state.userdata.username} /> */}
          {/* <MessageFeed limit={5} username={this.state.userdata.username} /> */}
          {/* {this.state.showMessageFeed ? (
            <MessageFeed limit={5} username={this.state.userdata.username} />
          ) : null} */}
        </div>
      </div>
    );
  }
}

export default SearchUser;
