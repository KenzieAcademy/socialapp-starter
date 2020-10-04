import React from 'react';
import './UpdateUser.css';
import DataService from "../../dataService"

class UpdateBio extends React.Component {
    state = {
        about: ""
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
                <div className='popup-inner'>
                    <h2>{this.props.text}</h2>
                    <p>{this.props.description}</p>
                    <div className="popup-content">
                        <textarea 
                            name="about"
                            value={this.state.about}
                            rows="7"
                            maxLength="255" 
                            placeholder="No information given."
                            onChange={this.handleChange}
                        >
                        </textarea>
                    </div>
                    <button onClick={this.handleSubmit}>Submit Changes</button>
                    <button onClick={this.props.closePopup}>Back to Profile</button>
                    <br />
                </div>
            </div>
        );
    }
}

export default UpdateBio;