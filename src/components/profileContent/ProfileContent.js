import React from "react";
import Card from "react-bootstrap/Card";
import FileUploader from "../../components/fileUploader/FileUploader";
import { userIsAuthenticated } from "../../redux/HOCs";
import "../../components/profileContent/ProfileContent.css";
// import UserInfo from "../../components/userInfo/UserInfo";

class ProfileContent extends React.Component {
  render() {
    return (
      <div className="card">
        <Card style={{ width: "30rem" , height: "30rem"}}>
          <FileUploader />
        </Card>
      </div>
    );
  }
}

export default userIsAuthenticated(ProfileContent);
