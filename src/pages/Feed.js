import React from "react";
// import AddLikes from "../components/addLikes/AddLikes";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";

class Feed extends React.Component {
  render() {
    return (
      <div className="Feed">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Messages</h2>
        <h2>Messages</h2>
        <h2>Messages</h2>
        {/* <AddLikes /> */}
      </div>
    );
  }
}

export default userIsAuthenticated(Feed);
