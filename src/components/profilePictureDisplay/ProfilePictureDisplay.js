import React from "react";
import GetUserPictureService from "../../services/GetUserPictureService";
import { Placeholder, Image } from "semantic-ui-react";
import profilePlaceholder from "../../assets/images/Placeholder.png";
import "./ProfilePictureDisplay.css";

class ProfilePictureDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: this.props.imageData,
    };

    this.GetUserPictureService = new GetUserPictureService();
  }

  componentDidMount = (event) => {
    this.GetUserPictureService.GetUserPicture(this.props.usernameFromURL)
      .then((result) => {
        this.setState({
          imageData: result.config.url,
        });
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data.statusCode === 404) {
          this.setState({
            imageData: 404,
          });
        }
      });
  };

  render() {
    if (this.state.imageData === 404) {
      return (
        <div width className="ProfilePictureDisplay">
          <Image
            className="profileImage"
            src={profilePlaceholder}
            alt="Profile Picture"
            ui={false}
          />
        </div>
      );
    }

    if (this.state.imageData) {
      return (
        <div className="ProfilePictureDisplay">
          <Image
            className="profileImage"
            src={this.state.imageData}
            alt="Profile Picture"
          />
        </div>
      );
    }

    return (
      <div className="ProfilePictureDisplay">
        <Placeholder>
          <Placeholder.Image className="profileImage" />
        </Placeholder>
      </div>
    );
  }
}

export default ProfilePictureDisplay;
