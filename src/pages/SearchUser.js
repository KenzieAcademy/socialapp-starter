import { message } from "antd";
import React from "react";
import DataService from "../dataService";
import "./searchUser.css";
import profilepic from "../components/defualtpicture/freeiconlibrary.jpg";

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
        searchedUser: false,
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
    this.client.getUser(this.state.username).then((result) => {
      console.log("user got");
      console.log(result.data);
      this.setState({
        username: result.data.user.username,
        displayname: result.data.user.displayName,
        about: result.data.user.about,
        picture:
          "https://socialapp-api.herokuapp.com" +
          result.data.user.pictureLocation,
        searchedUser: true,
      });
    });
    // .catch(alert("User doesn't Exist"));
  };

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
        <div className="">
          {this.state.about}
          {this.state.username}
          {/* {this.state.picture} */}
          <br></br>

          <img alt="userimage" width={200} src={this.state.picture} />
        </div>
      </div>
    );
  }
}

export default SearchUser;
