//import React from "react";

import React , { Component } from "react"
import { Redirect } from "react-router-dom"
import GetUsersService from "../getUsers/GetUsersService"
import UpdateUserService from "./UpdateUserService"

class UpdateUser extends Component {
    constructor(props) {
        super(props)
        this.client = new UpdateUserService()
        this.getInfoClient = new GetUsersService()
        this.state = {
            submitted: false,
            formData: {
                password: '',
                about: '',
                displayName: ''
            }
        }
    }

    componentDidMount() {
        const loginData = JSON.parse(localStorage.getItem("login"));
        return this.getInfoClient.getUser(loginData.result.username).then(result => {
            this.setState({formData: {
                about: result.data.user.email,
                displayName: result.data.user.displayName
                }
            })
        })
    }

    handleChange = (event) => {
        const formData = {...this.state.formData}
        formData[event.target.name] = event.target.value
        this.setState({formData})

    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.client.updateUser(this.state.formData)
        this.setState({
            submitted: true
        })

    }

    render() {
        if(!this.state.submitted){
            return(
                <div className="UpdateUser">
                    <form id="user-info" onSubmit={this.handleSubmit}>
                        <label htmlFor="password">
                            Password:
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            onChange={this.handleChange}
                        />
                        <label htmlFor="about">
                            About You:
                        </label>
                        <input
                            type="text"
                            name="about"
                            onChange={this.handleChange}
                        />
                        <label htmlFor="displayName">
                            Display Name:
                        </label>
                        <input
                            type="text"
                            name="displayName"
                            onChange={this.handleChange}
                        />
                        <input
                            type="submit"
                            value="submit"
                        />
                    </form>
                </div>
            )
        }
        else {
            return <Redirect to="/" />
        }

    }
}

export default UpdateUser