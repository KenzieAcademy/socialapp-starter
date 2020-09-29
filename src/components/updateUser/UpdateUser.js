import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "./UpdateUser.css";

import UpdateBio from './UpdateBio';
import UpdateAvatar from './UpdateAvatar';
import UpdateDisplayName from './UpdateDisplayName';
import UpdatePassword from './UpdatePassword';
import DeleteAccount from "../deleteAccount/DeleteAccount";

class UpdateUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            showBioPopup: false,
            showAvatarPopup: false,
            showDisplayNamePopup: false
        }
    }

    toggleBioPopup() {
        this.setState({
            showBioPopup: !this.state.showBioPopup
        })
    }

    toggleAvatarPopup() {
        this.setState({
            showAvatarPopup: !this.state.showAvatarPopup
        })
    }

    toggleDisplayNamePopup() {
        this.setState({
            showDisplayNamePopup: !this.state.showDisplayNamePopup
        })
    }

    togglePasswordPopup() {
        this.setState({
            showPasswordPopup: !this.state.showPasswordPopup
        })
    }

    render() {
        return (
            <div className="UpdateUser">
                <Avatar size={192} icon={<UserOutlined />} /><br /><br />
                
                <h2>Profile</h2>

                <button className="button-link" onClick={this.toggleAvatarPopup.bind(this)}>Change profile picture</button>
                {this.state.showAvatarPopup ? <UpdateAvatar
                    text="Change Profile Picture" 
                    description="Upload a photo to use as your Dragon's Den avatar." 
                    closePopup={this.toggleAvatarPopup.bind(this)} 
                /> : null }

                <button className="button-link" onClick={this.toggleBioPopup.bind(this)}>Update bio</button>
                {this.state.showBioPopup ? <UpdateBio 
                    text="Update Bio" 
                    description="This is what other users will see on your profile under the &quot;About Me&quot; section." 
                    closePopup={this.toggleBioPopup.bind(this)} 
                /> : null }

                <br />

                <h2>Account</h2>

                <button className="button-link" onClick={this.toggleDisplayNamePopup.bind(this)}>Change display name</button>
                {this.state.showDisplayNamePopup ? <UpdateDisplayName 
                    text="Change Display Name" 
                    description={`Your current display name is: ${this.props.user.displayName}`}
                    closePopup={this.toggleDisplayNamePopup.bind(this)} 
                /> : null }

                <button className="button-link" onClick={this.togglePasswordPopup.bind(this)}>Change password</button>
                {this.state.showPasswordPopup ? <UpdatePassword 
                    text="Change Password" 
                    description="Your new password must be between 3-20 characters long." 
                    closePopup={this.togglePasswordPopup.bind(this)} 
                /> : null }

                <Link to="/">Delete account</Link>
                <DeleteAccount className="button-link" />
            </div>
        );
    }
}

export default UpdateUser;