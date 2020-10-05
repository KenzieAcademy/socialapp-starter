import React from "./node_modules/react";
import Spinner from "./node_modules/react-spinkit";
import { Button, Input } from "./node_modules/antd"
import { UserOutlined, LockOutlined } from './node_modules/@ant-design/icons';
import { withAsyncAction } from "../../redux/HOCs";
import "./RegistrationForm.css";
import DataService from '../../dataService';

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
            this.props.login(
                {
                    "username": this.state.username,
                    "password": this.state.password
                }
            );

        })

    };



    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { loading, error } = this.props;
        return (
            <div className="RegistrationForm">
                <form id="registration-form" onSubmit={this.handleRegistration}>

                    {/* <Input
            addonBefore="Username"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          /> */}

                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        addonBefore="Username"
                        name="username"
                        placeholder="Enter username here..."
                        autoFocus
                        required
                        onChange={this.handleChange}
                    />
                    <br />
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        addonBefore="Display Name"
                        name="displayName"
                        placeholder="Enter display name here..."

                        required
                        onChange={this.handleChange}
                    />
                    <br />
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        addonBefore="Password"
                        name="password"
                        placeholder="Enter password here..."
                        minLength="9"

                        required
                        onChange={this.handleChange}
                    />
                    <br />
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Submit
          </Button>
                </form>
                {loading && <Spinner name="circle" color="blue" />}
                {error && <p style={{ color: "red" }}>{error.message}</p>}
            </div>
        );
    }
}

export default withAsyncAction("auth", "login")(RegistrationForm);