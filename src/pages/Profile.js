import React from "react";
import Menu from "../components/menu/Menu";
import { Link } from "react-router-dom";
import { userIsAuthenticated } from "../redux/HOCs";
import DataService from "../services/DataService/DataService";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.match.params.username,
      user: {},
      userImg: "",
    };

    this.client = new DataService();
  }

  componentDidMount() {
    this.client.getUserPicture(this.state.username).then((result) =>
      this.setState({
        userImg: result.config.url,
      })
    );
    return this.client.getUser(this.state.username).then((result) =>
      this.setState({
        user: result.data.user,
      })
    );
  }

  render() {
    if (this.state.user.displayName === undefined) {
      return (
        <div className="loading">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <h1>Loading Please Wait!</h1>
        </div>
      );
    }
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <div className="profilespace">
          <div>
            <img src={this.state.userImg} alt="No Image found :(" />
          </div>
          <div>
            <h1>Profile Name: {this.state.user.displayName} </h1>
            <h1>About Me Section Below:</h1>
            <p>{this.state.user.about}</p>
          </div>
        </div>
        <Link to="/profileUpdate">Update Profile</Link>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
