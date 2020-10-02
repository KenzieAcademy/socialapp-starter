import React from "react";
import Menu from "../components/menu/Menu";
import UpdateUser from "../components/updateUser/UpdateUser";
import { userIsAuthenticated } from "../redux/HOCs";
import UploadPicture from "../components/getUserPicture/GetUserPicture";

import { Button } from "antd";
<<<<<<< HEAD
import { UserOutlined } from "@ant-design/icons";
=======
>>>>>>> master

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <UploadPicture />
        <div></div>
        <br />
        <Button type="primary" danger onClick={this.handleDelete}>
          Delete User
        </Button>
        <UpdateUser />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
