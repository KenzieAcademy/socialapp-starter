import React from "react";
import DataService from "../dataService";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();

    this.state = {
      formData: null,
      imageURL: `https://socialapp-api.herokuapp.com/users/${this.client.getUsername()}/picture`,
      userdata: {
        username: "",
        displayName: "",
        about: "",
        picture: null,
        password: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.client
      .patchuser(
        this.state.password,
        this.state.about,
        this.state.displayName,
        this.state.username
      )
      .then(console.log("sucessful"));
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  handleChange2 = (e) => {
    e.preventDefault();
    this.setState({ about: e.target.value });
  };

  handleChange3 = (e) => {
    e.preventDefault();
    this.setState({ displayName: e.target.value });
  };

  componentDidMount() {
    let temp = this.client.getUsername();
    this.setState({ username: temp });
    this.client.getUser(temp).then((response) => {
      this.setState({
        username: response.data.user.username,
        displayname: response.data.user.displayName,
        aboutme: response.data.user.about,
        picture: response.data.user.pictureLocation,
      });
    });
  }

  handlefile = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("picture", file);
    this.setState({ formData });
  };

  handleUpload = () => {
    this.client.uploadPicture(this.state.formData).then((response) => {
      if (response.data.stausCode === 200) {
        this.updatePicture();
      }
    });
  };

  updatePicture() {
    const timestamp = Date.now();
    const newpic = `https://socialapp-api.herokuapp.com/users/${this.client.getUsername()}/picture?t=${timestamp}`;
    this.setState({ imageURL: newpic });
  }

  render() {
    return (
      <div>
        <h1>Edit Profile</h1>
        <form onSubmit={this.handleSubmit}>
          Change Your Password:
          <input
            type="text"
            name="NewAboutMe"
            placeholder="password"
            onChange={this.handleChange}
          />
          <br></br>
          Change Your About Me:
          <input
            type="text"
            name="about"
            placeholder="about me"
            onChange={this.handleChange2}
          />
          <br></br>
          Change Your Display Name:
          <input
            type="text"
            name="newDisplayName"
            placeholder="Change displayname"
            onChange={this.handleChange3}
          />
          <br></br>
          <button>Post</button>
          <img
            src={`https://socialapp-api.herokuapp.com/users/${this.client.getUsername()}/picture`}
            alt="profile pic"
            height={100}
            width={100}
            class="center"
          />
          <div className="Fileupload">
            <input
              type="file"
              name="picture"
              onChange={this.handlefile}
              accept="images/jpeg,images/png"
              capture="user"
            />
            <br></br>
            <button onClick={this.handleUpload}>Upload</button>

            <div>
              <img alt="user" src={this.state.imageURL} width={200} />
            </div>
          </div>
          ;
        </form>
        {this.state.about}
        {this.state.displayName}
        {this.state.password}
      </div>
    );
  }
}
export default EditProfile;
