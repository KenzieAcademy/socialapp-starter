import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import "../components/assets/stylesheets/Profile.css";
import UploadImage from "../components/imageUpload/UploadImage";
import Container from '@material-ui/core/Container';



class Profile extends React.Component {
  render() {
    return (
      <div className="profile-bg">
         <Container maxWidth = "sm">
        <div className="Profile">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <h2>Profile</h2>
          <UploadImage isAuthenticated={this.props.isAuthenticated} />
          
        </div>
          </Container>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
