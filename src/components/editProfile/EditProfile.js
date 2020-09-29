import React, { Component } from "react";
import SocialAppService from "../../socialAppService";
// import {Link} from "react-router-dom";
import "./editProfile.css";

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            displayName: "",

        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.client = new SocialAppService()
    }


    handleSubmit = (e) => {

        this.client.updateUser(this.state).then(response => response.data);
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
                        <input type="text" name="password" value={this.state.password}
                            onChange={this.handleInputChange} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="displayName" value={this.state.displayName}
                            onChange={this.handleInputChange} />
                        <label htmlFor="displayname">Display Name</label>
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
