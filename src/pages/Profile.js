import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import ProfileContent from "../components/profileContent/ProfileContent";
import "../pages/Profile.css";
import SocialappService from "../socialappService";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.api = new SocialappService();
    this.state = {
      user: {},
      password: "loading",
      about: "loading",
      displayName: "loading",
      checked: false,
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    this.api.getUser(localStorage.getItem("user")).then((response) =>
      this.setState({
        user: response.data.user,
        password: localStorage.getItem("password"),
        about: response.data.user.about,
        displayName: response.data.user.displayName,
      })
    );
  }

  handleUpdateUser = () => {
    let updateData = {
      password: this.state.password,
      about: this.state.about,
      displayName: this.state.displayName,
    };
    this.api.updateUser(this.state.user.username, updateData);
    this.setState({ checked: false });
    setTimeout(() => {
      this.getUser();
    }, 500);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSwitch = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <div className="Body">
        <div className="Profile">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <div className="ProfileHeader">My Profile</div>
          <ProfileContent
            user={this.state.user}
            change={this.handleChange}
            checked={this.state.checked}
            clickSwitch={this.handleSwitch}
            submitButton={this.handleUpdateUser}
          />
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
