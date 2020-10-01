import React from "react";
import ProfilePictureDisplay from "../profilePictureDisplay/ProfilePictureDisplay";
import UserAboutDisplay from "../userAboutDisplay/UserAboutDisplay";
import UserDataService from "../../services/UserDataService";
import { Card } from "semantic-ui-react";
import "./ProfilePictureParent.css"

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
    return (
      <div className="ProfileParent">
        <Card className = "ProfileParentCard" >
          <Card.Content>
            <Card.Header className="cardHeader" style={{ padding: 5 }}>
              {this.state.userDisplayname}
            </Card.Header>
            <ProfilePictureDisplay
              usernameFromURL={this.props.usernameFromURL}
              imageData={this.state.imageData}
            />
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

{
  /* <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card> */
}
