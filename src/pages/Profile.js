import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import api from "../dataService";
import Message from "../components/message/Message";

class Profile extends React.Component {
  state = { messages: [] };

  componentDidMount() {
    api
      .getUserMessages()
      .then((response) => this.setState({ messages: response.data.messages }));
  }

  render() {
    // if (this.state.messages.length === 0) {
    //   return (
    //     <div className="Profile">
    //       <h1>My Messages</h1>
    //       <h3>LOADING...</h3>
    //     </div>
    //   );
    // }

    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <Message />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
