import React, { Component } from 'react'
import DeleteUserService from "./DeleteUserService"
// import { jsonHeaders, handleJsonResponse } from "../../redux/actionCreators/constants";
// import axios from "axios"
import { Grommet, Button1 } from 'grommet'


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
        <Grommet>
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
                <Button1
                color='#00739D'>
                <button type="submit">
                    Delete Forever
                </button>
                </Button1>
            </form>
        </div>
         </Grommet>
    )
}
};
export default DeleteUser;


