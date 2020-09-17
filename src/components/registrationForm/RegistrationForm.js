import React from "react";
import { Link } from "react-router-dom";
import Spinner from "react-spinkit";
// import { withAsyncAction } from "../../redux/HOCs";
import "./RegistrationForm.css";
import DataService from "../../dataService";
import { Button } from "@material-ui/core";


class RegistrationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                username: "",
                password: "",
                displayName: "",
            },
            submitted: false
        };
        this.client = new DataService();
    }

    handleRegistration = e => {
        e.preventDefault();
        this.client.registerUser(this.state.formData).then(result => {
            alert("User Is Registered")
        })
        this.submittedForm()
    };

    handleChange = e => {
        let formData = this.state.formData
        formData[e.target.name] = e.target.value
        this.setState({ formData });
    };
    submittedForm() {
        this.setState({
            username: "",
            password: "",
            displayName: "",
            submitted: true

        })
    }



    render() {
        const { loading, error } = this.props;
        if (this.state.submitted) {
            return(
                <Link to="/">Return to Login</Link>
            )
        }
        else{
            return (
                <div className="RegistrationForm">
                    <form id="registration-form" onSubmit={this.handleRegistration}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            autoFocus
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
                        <label htmlFor="displayName">Display Name</label>
                        <input
                            type="text"
                            name="displayName"
                            required
                            onChange={this.handleChange}
                        />
                        <button type="submit" disabled={loading}>
                            Register
            </button>
                    </form>
                    {loading && <Spinner name="circle" color="blue" />}
                    {error && <p style={{ color: "red" }}>{error.message}</p>}
                </div>
            );
        }
    }
}

export default RegistrationForm;
