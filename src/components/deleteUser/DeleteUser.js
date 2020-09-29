import React, { Component } from 'react'
import DeleteUserService from "./DeleteUserService"
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";
import { Grommet } from 'grommet'
import { Redirect } from 'react-router-dom';
import axios from "axios"
import "../menu/Menu.css";

// import Button from '@material-ui/core/Button';
// import { Home } from '../pages/Home'

class DeleteNow extends Component {
    constructor(props) {
        super(props)
        this.client = new DeleteUserService();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.state = {
            text: "",
            username: "",
            password: ""
        }
    }

    handleRemove = (e) => {
        const id = JSON.parse(localStorage.getItem("login"));
        const url = 'https://socialapp-api.herokuapp.com/users/';
        e.preventDefault();
        this.client.deleteNow(url + id.result.username);
        return <Redirect to="/Home" />

    }

    handleChange = e => {
        // let loginData = JSON.parse(localStorage.getItem("login"));
        console.log("login")
        // return <Redirect to="/Home" />
        // window.location = "https://"
    };

    // handleSubmit() {
    //     let movie = {
    //         title: this.title.value,
    //         genre: this.genre.value,
    //         year: this.year.value,
    //         actors: this.actors.value.split(','),
    //         rating: this.rating.value
    //     }
    //     console.log(movie);

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
