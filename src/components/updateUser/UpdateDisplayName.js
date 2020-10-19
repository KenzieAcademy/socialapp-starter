import React, { useState } from 'react';
import './UpdateUser.css';
import DataService from "../../dataService"

class UpdateDisplayName extends React.Component {
    state = {
        displayName: ""
    }

    pageRefresh() {
        window.location.reload()
    }

    handleSubmit = () => {
        if (this.state.displayName.length < 3) {
            alert("Error: Display name is too short.")
        } else if (this.state.displayName.length > 20) {
            alert("Error: Display name is too long.")
        } else {
            new DataService().updateUser(this.state).then(response => {
                console.log(response)
                this.pageRefresh()
            })
        }
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
                            required
                            placeholder="Enter a new display name"
                            onChange={this.handleChange}
                        >
                        </input>
                    </div>
                    <button onClick={this.handleSubmit}>Submit Changes</button>
                    <button onClick={this.props.closePopup}>Back to Profile</button>
                    <br /><br />
                </div>
            </div>
        );
    }
}

export default UpdateDisplayName;