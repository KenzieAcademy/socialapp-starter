import React, { Component } from "react";
import SocialAppService from "../../socialAppService";
// import {Link} from "react-router-dom";
import "./editProfile.css";

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            displayName: '',

        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.client = new SocialAppService()
    }


    handleSubmit = (e) => {

        this.client.updateUser(this.state).then(response => console.log(response.data));
        e.preventDefault();

    }

    handleInputChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        })

    }
    render() {
        return (
            <div>
                <br />

                <form onSubmit={this.handleSubmit}>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" value={this.state.password}
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="displayname">Display Name</label>
                        <input type="text" name="displayName" value={this.state.displayName}
                            onChange={this.handleInputChange} />
                    </div>
                    <button className="Edit-profile" >
                        Edit Profile
                </button>
                </form>
            </div>
        )
    }
}
export default EditProfile;
