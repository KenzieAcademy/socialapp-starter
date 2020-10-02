import React from "react";
import { userIsAuthenticated } from "../redux/HOCs";
import DataService from "../services/DataService";
import Menu from "../components/menu/Menu";
import ProfileContent from "../components/profileContent/ProfileContent";
import Button from "react-bootstrap/Button";
import "./Profile.css";
import UserInfo from "../components/userInfo/UserInfo";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();

    this.state = {
      user: {},
      username: "",
      displayName: "",
      createdAt: "",
    };
  }

  componentDidMount = () => {
    this.getUser();
  };

  getUser() {
    this.client.getUser(this.client.getUsername()).then((response) =>
      this.setState({
        user: response.data.user,
        username: response.data.user.username,
        displayName: response.data.user.displayName,
        createdAt: response.data.user.createdAt,
      })
    );
  }
  handleChange = (e) => {
    
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDelete = (e) => {
    e.preventDefault();
    this.client
      .deleteUser()
      .then((payload) => {
        console.log(payload);
        localStorage.clear();
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const Username = this.state.user.username;
    const DisplayName = this.state.user.displayName;
    const CreatedAt = this.state.user.createdAt;

    return (
      <div className="Body">
        <div className="Profile">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <h2>My Profile</h2>
          <ProfileContent />
          <UserInfo
            username={Username}
            displayName={DisplayName}
            createdAt={CreatedAt}
          />

          <Button className="DeleteUser" onClick={this.handleDelete}>
            {" "}
            Delete User
          </Button>
        </div>
      </div>
    );
  }
}
export default userIsAuthenticated(Profile);
