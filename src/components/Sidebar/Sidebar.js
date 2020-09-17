import React from "react";
import "./Sidebar.css";
// import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import { withAsyncAction } from '../../redux/HOCs'
import { Link } from "react-router-dom";



class Sidebar extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <div className='sidebar'>
        <div className='Menu'>
          <h1>Yowl</h1>
          {this.props.isAuthenticated && (
            <div id='menu-links'>
              <Link to='/messagefeed'></Link>
            </div>
          )}
        </div>
        <SidebarOption active Icon={HomeIcon} text='Home' />
        <SidebarOption Icon={SearchIcon} text='Explore' />
        <SidebarOption Icon={NotificationsNoneIcon} text='Notifications' />
        <SidebarOption Icon={MailOutlineIcon} text='Messages' />
        <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks' />
        <SidebarOption Icon={ListAltIcon} text='Lists' />
        <SidebarOption Icon={PermIdentityIcon} text='Profile' />
        <SidebarOption Icon={MoreHorizIcon} text='More' />
      
        <div className="sidebar__post">
        <Button Link='/'variant="contained" color="secondary" onClick={this.handleLogout} >
          Logout
        </Button>
        </div>
       
      </div>
    );
  }
}

export default withAsyncAction('auth', 'logout')(Sidebar);

