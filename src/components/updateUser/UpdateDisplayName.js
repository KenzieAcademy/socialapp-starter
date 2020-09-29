import React from 'react';
import './UpdateUser.css';
import DataService from "../../dataService"

class UpdateDisplayName extends React.Component {
    state = {
        displayName: ""
    }

    handleSubmit = () => {
        new DataService().updateUser(this.state).then(response => {
            console.log(response)
        })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    render() {
        return (
            <div className='popup'>
                <div className='popup-inner-small'>
                    <h2>{this.props.text}</h2>
                    <p>{this.props.description}</p>
                    <div className="popup-content">
                        <input 
                            name="displayName"
                            value={this.state.displayName}
                            size="30"
                            minLength="3"
                            maxLength="20"
                            required
                            placeholder="Enter a new display name"
                            onChange={this.handleChange}
                        >
                        </input>
                    </div>
                    <button onClick={this.handleSubmit}>Submit Changes</button>
                    <button onClick={this.props.closePopup}>Back to Profile</button>
                    <br />
                </div>
            </div>
        );
    }
}

export default UpdateDisplayName;