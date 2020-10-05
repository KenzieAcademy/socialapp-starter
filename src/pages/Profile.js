import React from "react";
import "./PageStyles.css";
import Menu from "../components/menu/Menu";
import UserCard from "../components/userCard/UserCard";
import DataService from "../DataService";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageList from "../components/messageList/MessageList";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    let authData = JSON.parse(localStorage.getItem("login"));
    this.state = {
      username: authData.result.username,
      loading: true,
      userObj: {},
    };
    this.client = new DataService();
  }

  componentDidMount() {
    this.setState({ loading: false });
    this.client.getUser(this.state.username).then((result) => {
      this.setState({ userObj: result.data.user });
      console.log(result.data.user);
    });
  }
  render() {
    if (this.state.loading) {
      return <div className="profile">loading</div>;
    } else {
      return (
        <div className="Profile">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <h2>Profile</h2>
          <br />
          <div className="ProfileBody">
            <UserCard {...this.state.userObj} />

            <MessageList />
            <br />
          </div>
        </div>
      );
    }
  }
}

export default userIsAuthenticated(Profile);
