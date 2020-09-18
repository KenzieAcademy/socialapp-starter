import React, { Component } from 'react'
import DeleteUserService from "./DeleteUserService"
// import { jsonHeaders, handleJsonResponse } from "../../redux/actionCreators/constants";
// import axios from "axios"

class DeleteUser extends Component{
    constructor(props){
        super(props)
        this.url = url + "deleteUser";
        this.client = new DeleteUserService()
        this.state = {
            text: ""
        }
    }

    handleSubmit = e => {
        this.client.deleteUser(this.state)
    }

    postMessage(messageBody) {
        const UserData = JSON.parse(localStorage.getItem("token"));

        
    }


render() {
    return (
        <div>
            <form id="delete-user" onSubmit={this.handleSubmit}>
            <label htmlFor="message">Type your login here: </label>
                <input
                    type="text"
                    name="message"
                    required
                    onChange={this.handleChange}
                />
                <br/>
                <button type="submit">
                    Delete Forever
                </button>
            </form>
        </div>
    )
}
};
export default DeleteUser;


