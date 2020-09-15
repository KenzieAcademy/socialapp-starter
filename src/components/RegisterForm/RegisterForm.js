import React, { Component } from 'react'
import Spinner from 'react-spinkit'
import CreateUser from '../../APIService'
import './RegisterForm.css'
import { withAsyncAction } from "../../redux/HOCs";



class RegistorForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            displayName: "",
        };

        this.client = new CreateUser();
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    // On Submit, Create A New User And Show New User Info In The Console. Then Log User In.
    handleRegister = event => {
        event.preventDefault()
        this.client.registerUser(this.state)
        this.props.login(this.state.username && this.state.password)
    };

    render() {
        const { loading, error } = this.props;
        return (
            <div className="registerForm">
                <form id="register-form" onSubmit={this.handleRegister} >
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        autoFocus
                        required
                        onChange={this.handleChange}
                    />

                    <label htmlFor="displayName">Display Name</label>
                    <input
                        type="text"
                        name="displayName"
                        required
                        onChange={this.handleChange}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        required
                        onChange={this.handleChange}
                    />
                    <button type="submit">Sign Up</button>
                </form>

                {loading && <Spinner name="circle" color="blue" />}
                {error && <p style={{ color: "red" }}>{error.message}</p>}
            </div>
        );
    }
}
export default withAsyncAction("auth", "login")(RegistorForm);