import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
// import GetUserPicture from "../components/getUserPi
import InputFile from "../components/inputFileButton/InputFile";

import DataService from "../DataService";
import { Button } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
  }
  handleDelete = (e) => {
    e.preventDefault();
    this.client
      .deleteUser()
      .then((payload) => {
        console.log(payload);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
        <InputFile />
        <Button type="primary" danger onClick={this.handleDelete}>
          Delete User
        </Button>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
