import React from "react";
import Menu from "../components/menu/MenuAuthenticated";
import { userIsAuthenticated } from "../redux/HOCs";
import Feed from "../components/feed/Feed";
import TextInput from "../components/TextInput/TextInput"
import Profiles from "../components/Profiles/Profiles";

class MessageFeed extends React.Component {


  render() {
    return (
      <div className="feed">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div>
          <TextInput />
          <Feed />
          <Profiles />
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
