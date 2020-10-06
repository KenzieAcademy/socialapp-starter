import React from "react";
import { userIsAuthenticated } from "../redux/HOCs";
import { Button, Card } from "react-bootstrap";
import DataService from "../services/DataService";
import Menu from "../components/menu/Menu";
import ProfileContent from "../components/profileContent/ProfileContent";
import UserInfo from "../components/userInfo/UserInfo";
import "./Profile.css";

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
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div className="Profile">
          <h3>My Profile</h3>
          <Card style={{ height: "70rem" }}>
            <ProfileContent />
            <Button
              variant="dark"
              className="DeleteUser"
              onClick={this.handleDelete}
            >
              {" "}
              Delete User
            </Button>
            <UserInfo
              username={Username}
              displayName={DisplayName}
              createdAt={CreatedAt}
            />
          </Card>
        </div>
      </div>
    );
  }
}
export default userIsAuthenticated(Profile);
