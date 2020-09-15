import React from "react";
// import Menu from "../components/menu/Menu";
import './Profile.css'
import { userIsAuthenticated } from "../redux/HOCs";
// import { Avatar } from "@material-ui/core";
import Sidebar from "../components/Sidebar/Sidebar";
import Widgets from "../components/widgets/Widgets";
import Post from "../components/post/Post";
import MessageBox from "../components/messages/MessageBox";
// import Feed from "../components/feeds/Feed";



class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <Sidebar isAuthenticated={this.props.isAuthenticated} />
        {/* <Feed/> */}
        <Widgets/>
        <Post/>
        <MessageBox/>
       

       
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
