import React from "react";
import ProfilePictureDisplay from "../profilePictureDisplay/ProfilePictureDisplay";
import UserAboutDisplay from "../userAboutDisplay/UserAboutDisplay";
import UserDataService from "../../services/UserDataService";
import { Card } from "semantic-ui-react";
import UploadProfilePicture from "../uploadProfilePicture/UploadProfilePicture";
import "./ProfilePictureParent.css";
import UpdateUserInfoForm from "../updateUserInfoForm/UpdateUserInfoForm";
import DeleteUser from "../deleteUser/DeleteUser";

class ProfilePictureParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: null,
      userAboutInfo: null,
      userUsername: null,
      userDisplayname: null,
    };

    //Gets the User's info, set's it in state
    this.userInfo = UserDataService.getDirectUser(
      this.props.usernameFromURL
    ).then((response) => {
      console.log(response);
      this.setState({
        userAboutInfo: response.data.user.about,
        userUsername: response.data.user.username,
        userDisplayname: response.data.user.displayName,
      });
    });
  }

  updateImage() {}

  render() {
    if (this.state.userUsername === this.props.loggedInUser) {
      return (
        <div className="ProfilePictureParent">
          <Card className="ProfileParentCard">
            <Card.Content className="ProfileCardContentImage">
              <ProfilePictureDisplay
                usernameFromURL={this.props.usernameFromURL}
                imageData={this.state.imageData}
              />
            </Card.Content>
            <Card.Content className="ProfileCardContentBody" extra>
              <Card.Header className="cardHeader">
                {this.state.userDisplayname}
              </Card.Header>
              <Card.Description>
                <UserAboutDisplay userAboutInfo={this.state.userAboutInfo} />
              </Card.Description>
            </Card.Content>
            <Card.Content className="ProfileCardUserControls">
              <Card.Header>User Controls</Card.Header>
              <UploadProfilePicture />
              <UpdateUserInfoForm />
              <DeleteUser />
            </Card.Content>
          </Card>
        </div>
      );
    }

    return (
      <div className="ProfilePictureParent">
        <Card className="ProfileParentCard">
          <Card.Content className="ProfileCardContentImage">
            <ProfilePictureDisplay
              usernameFromURL={this.props.usernameFromURL}
              imageData={this.state.imageData}
            />
          </Card.Content>
          <Card.Content className="ProfileCardContentBody" extra>
            <Card.Header id="cardHeader">
              {this.state.userDisplayname}
            </Card.Header>
            <Card.Description>
              <UserAboutDisplay userAboutInfo={this.state.userAboutInfo} />
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default ProfilePictureParent;
