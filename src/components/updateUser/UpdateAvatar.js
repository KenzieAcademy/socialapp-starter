import React from 'react';
import './UpdateUser.css';
import FileUploader from "../fileUploader/FileUploader"


class UpdateAvatar extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup-inner'>
                    <h2>{this.props.text}</h2>
                    <p>{this.props.description}</p>
                    <FileUploader />
                    <button onClick={this.props.closePopup}>Back to Profile</button>
                    <br /><br />
                </div>
            </div>
        );
    }
}

export default UpdateAvatar;