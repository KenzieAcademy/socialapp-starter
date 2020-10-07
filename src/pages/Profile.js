import React from "react";
import DeleteAcctButton from "../components/deleteacct/DeleteAcct";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import UploadPhoto from "../components/uploadPhoto/UploadPhoto";
import DataService from "./dataService";
import AboutMe from "../components/About Me/AboutMe"



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
        <center>
          <b><h1>{this.state.user.username}</h1></b>
          <UploadPhoto />
          <br></br>
          <AboutMe />
          <DeleteAcctButton />
        </center>
      </div>
    );
  }



}

export default userIsAuthenticated(Profile);
