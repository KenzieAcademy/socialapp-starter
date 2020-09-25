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
    };
  }

  componentDidMount() {
    this.api.getUser(localStorage.getItem("user")).then((response) =>
      this.setState({
        user: response.data.user,
        password: response.data.user.password,
        about: response.data.user.about,
        displayName: response.data.user.displayName,
      })
    );
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="Body">
        <div className="Profile">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <div className="ProfileHeader">My Profile</div>
          <ProfileContent />
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
