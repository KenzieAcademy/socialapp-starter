import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "./UpdateUser.css";

class UpdateUser extends React.Component {
    render() {
        return (
            <div className="UpdateUser">
                <Avatar size={256} icon={<UserOutlined />} /><br /><br />
                <h2>Profile</h2>
                <Link to="/todo">Change profile picture</Link><br />
                <Link to="/todo">Update bio</Link><br /><br />
                <h2>Account Management</h2>
                <Link to="/todo">Change display name</Link><br />
                <Link to="/todo">Change password</Link><br />
                <Link to="/todo">Delete account</Link>
            </div>
        );
    }
}

export default UpdateUser;