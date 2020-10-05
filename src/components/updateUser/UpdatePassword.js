import React from 'react';
import './UpdateUser.css';
import { userIsAuthenticated } from "../../redux/HOCs";
import DataService from "../../dataService"

class UpdatePassword extends React.Component {
    state = {
        password: ""
    }

    pageRefresh() {
        window.location.reload()
    }

    handleSubmit = () => {
        if (this.state.password.length < 3) {
            alert("Error: Password is too short.")
        } else if (this.state.password.length > 20) {
            alert("Error: Password is too long.")
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
                            name="password"
                            type="password"
                            value={this.state.password}
                            size="30"
                            required
                            placeholder="Enter a new password"
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

export default userIsAuthenticated(UpdatePassword);