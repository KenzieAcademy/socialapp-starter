import React, { Component } from 'react'
import DeleteUserService from "./DeleteUserService"
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";
import { Grommet } from 'grommet'
// import Button from '@material-ui/core/Button';

// import { Home } from '../pages/Home'

class DeleteNow extends Component {
    constructor(props) {
        super(props)
        this.client = new DeleteUserService();
        this.loginData = "";
        this.state = {
            text: "",
            username: "",
            password: ""
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
        // window.location = "https://"

    };

    render() {
        return (
            <div>
                            <Grommet>

                < br />
                <Menu isAuthenticated={this.props.isAuthenticated}
                />

                <Link to="/deleteUser">Delete User </Link>
                <Link to="/messagefeed">Message Feed</Link>
                {/* <Home /> */}








                <br />
                <form id="delete-user" onSubmit={this.handleSubmit}>
                    <label htmlFor="delete">Type Username to Delete:</label>
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
                </Grommet>

            </div>
        )
    }
}
// then take to blank page which says: 'Thank you. Now make a new user."
//window.location = "https://www.example.com";(use where you would use an 'alert'.)

export default DeleteNow;
