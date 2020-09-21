import React, { Component } from 'react'
import DeleteUserService from "./DeleteUserService"
import Menu from "../menu/Menu";

class DeleteNow extends Component {
    constructor(props) {
        super(props)
        this.client = new DeleteUserService()

        this.state = {
            text: ""
        }
        const loginData = JSON.parse(localStorage.getItem("login"));

    }

    handleSubmit = e => {
        this.client.deleteNow('loginData')
    }

    handleChange = e => {

        // loginData = [""];
        // console.log(JSON.stringify(this.state))
        console.log("login")

    };

    render() {
        return (
            <div>
                < br/>
                <Menu />
                <br />
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
