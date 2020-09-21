import React from 'react';
import './UpdateUser.css';

class UpdateBio extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup-inner'>
                    <h1>{this.props.text}</h1>
                    <h3>{this.props.description}</h3>
                    <textarea 
                        cols="85" rows="4" 
                        placeholder="There's nothing here yet. Tell the world about yourself!">
                    </textarea>
                    <button>Submit Changes</button>
                    <button onClick={this.props.closePopup}>Back to Profile</button>
                </div>
            </div>
        );
    }
}

export default UpdateBio;