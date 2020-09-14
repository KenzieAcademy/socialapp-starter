import React from "react";
<<<<<<< HEAD
import {Avatar, Button, Image, Upload} from 'antd'

import Menu from "../components/menu/Menu";
=======
import Menu from "../components/menu/MenuAuthenticated";
>>>>>>> 5baf8692f60877519aac4dafccc19ae814db47cc
import { userIsAuthenticated } from "../redux/HOCs";

class Profile extends React.Component {
  super(props) {
    this.state = {
      username: [],
      picture: "",
    }
<<<<<<< HEAD
  }
=======


    
  }

>>>>>>> 5baf8692f60877519aac4dafccc19ae814db47cc
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Your Profile Page</h2>
        <Image></Image>
        <Upload

        ><Button>Upload Profile picture here!</Button></Upload>
        <button>Save picture</button>
      </div>
    );
  }
}
export default userIsAuthenticated(Profile);
