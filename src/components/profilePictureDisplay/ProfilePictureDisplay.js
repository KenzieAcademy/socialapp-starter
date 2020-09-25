import React from "react";
import GetUserPictureService from "../../services/GetUserPictureService";
import { Placeholder, Image,} from "semantic-ui-react";
import profilePlaceholder from "../../assets/images/Placeholder.png";
import "./ProfilePictureDisplay.css";

class ProfilePictureDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: null,
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
        <div className="ProfilePictureDisplay">
          <Image src={profilePlaceholder} style={{ height: 170, width: 170 }} alt="Profile Picture" />
        </div>
      );
    }

    if (this.state.imageData) {
      return (
        <div className="ProfilePictureDisplay">
          <Image src={this.state.imageData} style={{ height: 170, width: 170 }} alt="Profile Picture" />
        </div>
      );
    }

    return (
      <div className="ProfilePictureDisplay">
        <Placeholder style={{ height: 170, width: 170 }}>
          <Placeholder.Image />
        </Placeholder>
      </div>
    );
  }
}

export default ProfilePictureDisplay;
