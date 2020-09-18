import React from "react";
import DeleteAcctButton from "../components/deleteacct/DeleteAcct";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import { Button } from 'antd';
import UploadPhoto from "../components/uploadPhoto/UploadPhoto";
import DataService from "./dataService"

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };

    this.client = new DataService();
  }
  componentDidMount() {
    this.client.getUser(this.props.username).then(res => {
      this.setState({ user: res.data.user })
      console.log(res)
    })
  }
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        {this.state.user.username}
        <DeleteAcctButton />
        <UploadPhoto />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
