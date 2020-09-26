import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import Menu from "../menu/Menu";
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
    console.log(this.state);
    let newFile = new FormData();
    newFile.append("picture", this.state.picture);

    return this.client
      .changeProfilePic(newFile)
      .then((result) => console.log(result));
  };

  handleChange = (e) => {
    console.log(e.target.files[0]);
    this.setState({ picture: e.target.files.item(0) });
  };
  render() {
    return (
      <div>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <form
          encType="multipart/form-data"
          method="put"
          onSubmit={this.handleUpload}
        >
          <input
            onChange={this.handleChange}
            type="file"
            accept="image/jpeg, image/png, image/gif"
          />
          <br />
          <button>Change picture</button>
        </form>
      </div>
    );
  }
}

export default userIsAuthenticated(UploadProfilePicture);
