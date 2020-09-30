import React from "react";
import DataService from "../dataService";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();

    this.state = {
      userdata: {
        username: "",
        displayname: "",
        aboutme: "",
        picture: null,
        password: "1234",
      },
    };
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = this.state;
  //   // console.log(data)
  //   this.client.postMessages(this.state.messageInput).then((response) => {
  //     console.log("message sent");
  //     this.setState((newState) => ({ messageInput: newState.messageInput }));
  //   });
  // };
  handleSubmit = (e) => {
    e.preventDefault();
    this.client.patchuser(
      this.state.password,
      this.state.aboutme,
      this.state.displayname,
      this.state.username
    );
  };

  // password, about, displayName, username
  // handleChange = (event) => {
  //   event.preventDefault();
  //   console.log(event.target);
  //   this.setState({ messageInput: event.target.value });
  // };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  handleChange2 = (e) => {
    e.preventDefault();
    this.setState({ aboutme: e.target.value });
  };

  handleChange3 = (e) => {
    e.preventDefault();
    this.setState({ displayname: e.target.value });
  };

  componentDidMount() {
    let temp = this.client.getUsername();
    this.setState({ username: temp });
  }
  // getuserdata() {
  //   this.client.getUser(this.props.match.params.username).then((result) => {
  //     console.log(result.data);
  //     this.setState({
  //       username: result.data.user.username,
  //       displayname: result.data.user.displayName,
  //       aboutme: result.data.user.aboutme,
  //       picture: result.data.user.pictureLocation,
  //     });
  //   });
  // }

  // componentDidMount() {
  //   this.getuserdata();
  // }
  // }
  render() {
    return (
      <div>
        <p>Edit Profile</p>
        <h1>In the Process of being set up</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="NewAboutMe"
            placeholder="password"
            onChange={this.handleChange}
          />
          <br></br>
          <input
            type="text"
            name="about"
            placeholder="about me"
            onChange={this.handleChange2}
          />
          <input
            type="text"
            name="newDisplayName"
            placeholder="Change displayname"
            onChange={this.handleChange3}
          />
          {/* <input
            type="text"
            name="username"
            placeholder="Change username"
            onChange={this.handleChange4}
          /> */}
          <button>Post</button>
          {/* // {this.state.password}
          // {this.state.aboutme}
          // {this.state.displayname}
          // {this.state.username} */}
        </form>
      </div>
    );
  }
}
export default EditProfile;
