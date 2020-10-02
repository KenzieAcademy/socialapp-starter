import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import Menu from "../menu/Menu";
import "./UploadProfilePicture.css";
import DataService from "../../services/DataService/DataService";

class UploadProfilePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: "",
    };
    this.client = new DataService();
  }
  handleUpload = (event) => {
    event.preventDefault();
    let user = JSON.parse(localStorage.getItem("login")).result;
    let userPath = "/profile/" + user.username;
    let newFile = new FormData();
    newFile.append("picture", this.state.picture);

    return this.client
      .changeProfilePic(newFile)
      .then((result) => this.props.history.push(userPath));
  };

  handleChange = (e) => {
    this.setState({ picture: e.target.files.item(0) });
  };
  render() {
    return (
      <div>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <form className="profilePicForm" onSubmit={this.handleUpload}>
          <input
            onChange={this.handleChange}
            type="file"
            accept="image/jpeg, image/png, image/gif"
          />
          <br />
          <button className="pictureButton">Change picture</button>
        </form>
      </div>
    );
  }
}

export default userIsAuthenticated(UploadProfilePicture);
