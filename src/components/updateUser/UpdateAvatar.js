import React from 'react';
import './UpdateUser.css';
import { Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';


class UpdateAvatar extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup-inner'>
                    <h2>{this.props.text}</h2>
                    <p>{this.props.description}</p>
                    <div className="popup-content">
                        <Avatar size={256} icon={<UserOutlined />} />
                    </div>
                    <button>Upload a Photo</button>
                    <button onClick={this.props.closePopup}>Back to Profile</button>
                </div>
            </div>
        );
    }
}

export default UpdateAvatar;