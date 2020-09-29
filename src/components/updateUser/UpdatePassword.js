import React from 'react';
import './UpdateUser.css';

class UpdatePassword extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup-inner-small'>
                    <h2>{this.props.text}</h2>
                    <p>{this.props.description}</p>
                    <div className="popup-content">
                        <input 
                            type="password"
                            size="30"
                            maxLength="20"
                            required
                            placeholder="Enter a new password">
                        </input>
                    </div>
                    <button>Submit Changes</button>
                    <button onClick={this.props.closePopup}>Back to Profile</button>
                    <br />
                </div>
            </div>
        );
    }
}

export default UpdatePassword;