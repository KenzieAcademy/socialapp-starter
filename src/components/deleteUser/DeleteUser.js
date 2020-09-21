import React, { Component } from 'react'
import DeleteUserService from "./DeleteUserService"

class DeleteNow extends Component {
    constructor(props) {
        super(props)
        // this.client = new DeleteUserService()
        this.state = {
            text: ""
        }
    }

    handleSubmit = e => {
        this.client.deleteNow(this.state)
    }

    handleChange = e => {
        const loginData = JSON.parse(localStorage.getItem("login"));

        loginData = [""];
        console.log(JSON.stringify(this.state))
    };

    render() {
        return (
            <div>
                <form id="delete-user" onSubmit={this.handleSubmit}>
                    <label htmlFor="message">Type Username to Delete:</label>
                    <input
                        type="text"
                        name="delete"
                        required
                        
                    /><br />
                    <button type="submit" 
                    onChange={this.handleChange}>
                        Delete Forever!
                        </button>
                </form>
            </div>
        )
    }
}
// then take to blank page which says: 'Thank you. Now make a new user."
//window.location = "https://www.example.com";(use where you would use an 'alert'.)

export default DeleteNow;
