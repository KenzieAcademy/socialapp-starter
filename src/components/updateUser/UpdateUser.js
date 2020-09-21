import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "./UpdateUser.css";
import UpdateBio from './UpdateBio';

class UpdateUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showBioPopup: false }
    }

    toggleBioPopup() {
        this.setState({
            showBioPopup: !this.state.showBioPopup
        })
    }

    render() {
        return (
            <div className="UpdateUser">
                <Avatar size={256} icon={<UserOutlined />} /><br /><br />
                <h2>Profile</h2>
                <button className="button-link">Change profile picture</button>
                <button className="button-link" onClick={this.toggleBioPopup.bind(this)}>Update bio</button>
                {this.state.showBioPopup ? <UpdateBio 
                    text="Update Bio" 
                    description="This is what other users will see on your profile under the &quot;About Me&quot; section." 
                    closePopup={this.toggleBioPopup.bind(this)} 
                /> : null }
                <br />
                <h2>Account Management</h2>
                <Link to="/todo">Change display name</Link><br />
                <Link to="/todo">Change password</Link><br />
                <Link to="/todo">Delete account</Link>
            </div>
        );
    }
}

export default UpdateUser;