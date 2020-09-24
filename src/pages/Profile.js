import React from "react";
import LikeButton from "../components/likebutton/LikeButton";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import UploadPhoto from "../components/uploadPhoto/UploadPhoto";
import DeleteMessage from "../components/deleteMessage/DeleteMessage";
import DeleteAcctButton from "../components/deleteacct/DeleteAcct";
import DataService from "./dataService";

//import ConfirmProp from "../components/comfimPrompt/ConfirmProp";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };

    this.client = new DataService();
  }
  componentDidMount() {
    this.client.getUser(this.props.username).then((res) => {
      this.setState({ user: res.data.user });
      console.log(res);
    });
  }
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        {this.state.user.username}
        <UploadPhoto />
        <DeleteAcctButton />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
