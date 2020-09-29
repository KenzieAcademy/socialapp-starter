import React, { Component } from 'react'
import DeleteMessageService from "./DeleteMessageService"
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";
import { Grommet } from 'grommet'
import { Redirect } from 'react-router-dom';
import axios from "axios"

class DeleteMessage extends Component {
    constructor(props) {
        super(props)
        this.client = new DeleteMessageService()
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.state = {
            text: "",
            username: "",
            password: ""
        }
        
    }

    handleSubmit = e => {
        this.client.DeleteMessage(this.state)
    }

    handleRemove = (e) => {
        const id = JSON.parse(localStorage.getItem("messageId"));
        const url = 'https://socialapp-api.herokuapp.com/users/';
        e.preventDefault();
        this.client.deleteNow(url + id.result);
        return <Redirect to="/Home" />

    }

    handleChange = e => {
        // this.setState({ text: e.target.value });
        // console.log(JSON.stringify(this.state))
      };

      render() {
        return (
            <div>
                <Grommet>

                    < br />
                    <Menu isAuthenticated={this.props.isAuthenticated}
                    />
                    <Link to="/messagefeed">Message Feed </Link><br />
                    <Link to="/">Profile </Link><br />
                    <Link to="/userlist"> User List</Link><br />
                    {/* <Home /> */}
                    <br />
                    <form id="delete-user" onSubmit={this.handleRemove}>
                        <label htmlFor="delete">Type Message ID to Delete:</label>
                        <input
                            type="text"
                            name="delete"
                            required

                        /><br />
                        <button type="submit"
                            onChange={this.handleChange}>
                            Delete Message
                        </button>
                    </form>
                </Grommet>

            </div>
        )
    }
}

export default DeleteMessage