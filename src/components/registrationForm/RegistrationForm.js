import React from "react";
import Spinner from "react-spinkit";
// import { withAsyncAction } from "../../redux/HOCs";
import "./RegistrationForm.css";
import DataService from "../../dataService";
import { Button } from "@material-ui/core";


class RegistrationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            displayName: ""
        };
        this.client = new DataService();
    }

    handleRegistration = e => {
        e.preventDefault();
        this.client.registerUser(this.state).then(result => {
            alert(JSON.stringify(result.data))
        })
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });


    };
    resetForm = (event) => {
        this.setState({
            username: "mulu",
            password: "hhhhh",
            displayName: "hhhyh"
        })
    }



    render() {
        const { loading, error } = this.props;
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
                    <Button variant="contained" color="primary" type="submit" disabled={loading}>
                        Register
          </Button>
                </form>
                {loading && <Spinner name="circle" color="blue" />}
                {error && <p style={{ color: "red" }}>{error.message}</p>}
            </div>
        );
    }
}

export default RegistrationForm;
