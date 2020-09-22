import React from 'react';
import './UpdateUser.css';

class UpdateDisplayName extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup-inner-small'>
                    <h2>{this.props.text}</h2>
                    <p>{this.props.description}</p>
                    <div className="popup-content">
                        <input 
                            size="30"
                            maxlength="20"
                            required
                            placeholder="Enter a new display name">
                        </input>
                    </div>
                    <button>Submit Changes</button>
                    <button onClick={this.props.closePopup}>Back to Profile</button>
                </div>
            </div>
        );
    }
}

export default UpdateDisplayName;