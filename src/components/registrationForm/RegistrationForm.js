import React from 'react';
import Spinner from "react-spinkit";
import "./Registration.css";
import SocialService from "../socialService";

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            displayName: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.client = new SocialService();
    }

    handleRegistration = (event) => {
        event.preventDefault();
        this.client.registerUser(this.state).then(result => {
            alert(result.data)
        })
    };

    usernamehandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    dislayNamehandler = (event) => {
        this.setState({
            displayName: event.target.value
        })
    }

    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert(`${this.state.username} ${this.state.password} Successfully Registered !!`)
        console.log(this.state);
        this.setState({
            username: "",
            displayName: "",
            password: "",
        })
    }

    render() {
        const { loading, error } = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Registration</h1>
                    <label>Username :</label> <input type="text" value={this.state.Username} onChange={this.usernamehandler} placeholder="Username..." /><br />
                    <label>DisplayName :</label> <input type="text" value={this.state.displayName} onChange={this.dislayNamehandler} placeholder="Display Name..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <button type="submit" disabled={loading}>Submit</button>
                </form>
                {loading && <Spinner name="circle" color="blue" />}
                {error && <p style={{ color: "red" }}>{error.message}</p>}
            </div>
        );
    }
}
export default RegistrationForm;


















