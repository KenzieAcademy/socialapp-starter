import React from "react";
import Menu from "../components/menu/Menu";
import UpdateUser from "../components/updateUser/UpdateUser";
import { userIsAuthenticated } from "../redux/HOCs";
// import GetUserPicture from "../components/getUserPi

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <div>
          <Avatar
            size={264}
            icon={<UserOutlined />}
            // src={InputFile.props.state.imgUrl}
          />
        </div>
        <UpdateUser />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
