import React from "react";
import DataService from "../dataService";
import "./searchUser.css";

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();

    this.state = {
      username: "",
      displayname: "",
      aboutme: "",
      picture: "",
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
        this.setState({
          username: result.data.user.username,
          displayname: result.data.user.displayName,
          aboutme: result.data.user.aboutme,
          picture: result.data.user.pictureLocation,
        });
      })
      .catch(alert("User doesn't Exist"));
  };

  render() {
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
        {this.state.displayName}
        {this.state.aboutme}
        {this.state.username}
        {/* {this.state.picture} */}
      </div>
    );
  }
}

export default SearchUser;
