import React, { Component } from "react";
import DataService from "../../dataService";
import { Link } from "react-router-dom";
import "./UserProfile.css";
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
    this.state = {
      data: {},
      mount: 0,
      displayName: 0,
      about: 0,
      password: 0,
    };
  }
  gettheuser() {
    return this.client.GetAUser(this.props.name).then((result) => {
      this.setState({
        userinfo: result.data.user,
      });
      this.getthepicture(this.props.name);

      this.setState({
        mount: 1,
      });
    });
  }
  getthepicture() {
    return this.client
      .GetUserPicture(this.state.userinfo.username)
      .then((result) => {
        this.setState({
          picture: result.config.url,
          mount: 1,
        });
      });
  }
  handleSubmit = (event) => {
    let displayNameInput = event.target.elements.displayName.value;
    let aboutInput = event.target.elements.about.value;
    if (displayNameInput.length <= 1) {
      displayNameInput = this.state.userinfo.displayName;
    }
    if (aboutInput.length <= 1) {
      aboutInput = this.state.userinfo.about;
    }
    const textdata = {
      password: event.target.elements.password.value,
      about: aboutInput,
      displayName: displayNameInput,
    };
    this.client.UpdateUser(textdata, this.state.userinfo.username);
  };

  componentDidMount() {
    this.gettheuser();
  }
  render() {
    if (this.state.mount === 0)
      return (
        <div>
          <h1>loading</h1>
        </div>
      );
    return (
      <div id="profileInfo">
        <h1 className="hello">hello {this.state.userinfo.displayName}!</h1>
        <img height="200" width="200" src={this.state.picture} alt="" />
        <button>new picture</button>
        <div>
          <h3>
            About me:
            <br />
            {this.state.userinfo.about}
          </h3>
        </div>
        <button>Update Bio</button>
        <div className="hide">
          <form onSubmit={this.handleSubmit}>
            <div>Update Display Name</div>
            <label>Change your Display Name! </label>
            <input
              type="text"
              name="displayName"
              placeholder={this.state.userinfo.displayName}
            ></input>
            <label>Let us Know About You! </label>
            <input
              type="text"
              name="about"
              placeholder={this.state.userinfo.about}
            ></input>
            <label>Password to Update</label>
            <input
              type="password"
              name="password"
              placeholder="****"
              required
            ></input>

            <button type="submit">Update</button>
          </form>
        </div>
        <Link to="/">hello</Link>
      </div>
    );
  }
}
export default UserProfile;
