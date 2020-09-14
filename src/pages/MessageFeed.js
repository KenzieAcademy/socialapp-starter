import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import Feed from "../components/feed/Feed";

class MessageFeed extends React.Component {


  render() {
    return (
      <div className="feed">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div>
          <Feed />
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
