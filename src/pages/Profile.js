import React from "react";
import Menu from "../components/menu/Menu.js";
import Layout from '../components/Layout'
import { userIsAuthenticated } from "../redux/HOCs";
import SendPost from '../components/sendPost/SendPost'


class Profile extends React.Component {
  render() {
    return (
      <Layout>
        <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <SendPost></SendPost>
      </div>
      </Layout>

    );
  }
}

export default userIsAuthenticated(Profile);
