import React from 'react';
import './UpdateUser.css';
import { userIsAuthenticated } from "../../redux/HOCs";
import DataService from "../../dataService"

class UpdatePassword extends React.Component {
    state = {
        password: ""
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
                            name="password"
                            type="password"
                            value={this.state.password}
                            size="30"
                            minLength="3"
                            maxLength="20"
                            required
                            placeholder="Enter a new password"
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

export default userIsAuthenticated(UpdatePassword);