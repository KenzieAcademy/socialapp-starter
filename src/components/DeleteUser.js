import React, { Component } from 'react';
import axios from 'axios';
import { userIsAuthenticated } from "../redux/HOCs";

class DeleteUser extends Component {
    // constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
    constructor(props) {
        super(props);
        this.state = {
            showMessage: false,
            username: "",
            password: "",
            displayName: "",
            about: "",
            statusCode: 0
        };
        this.client = new DataService();
    }
};


const token = JSON.parse(localStorage.getItem("login"));

// const loginData = JSON.parse(localStorage.getItem("login"));
// loginData.result.token
// Line 2 will give you the token value
// const token = getState().auth.login.result.token;

deleteCurrentUser(username, password, token) {
    if (token.length >= 1) {
        delete (token, username, password);
    }
    return deleteCurrentUser(username).then(result => {
        this.setState({
            token = [0],
            username = "",
            password = ""
        })
    })
};
handleChange = (event) => {
    const formData = { ...this.state.formData }
    formData[event.target.name] = event.target.value
    this.setState({ formData: { User: event.target.value } });
}
render() {
    return (
        <div>
            {/* {JSON.stringify(this.state.data)} */}

            <SubmitForm handleChange={this.handleChange}
                getSubmit={this.getSubmit} />
            <br />
            <Display
                user={this.state.data.user}
                age={this.state.age}
                location={this.state.location}
                displayName={this.state.data.displayName} />
            <br />
            <div id="deleteUserDiv">
                <strong>Click the button to delete user- </strong><br />
                <button id="" onClick={this.showMessage.bind(null, true)}>Do Not Delete</button>
                <br />
                <button className="deleteUserButton" id="" onClick={this.showMessage.bind(null, false)}>Delete</button>
                {this.state.showMessage && (<div>{'User has been Deleted.'}</div>)}
            </div>
        </div>
    );
}

export default userIsAuthenticated(DeleteUser);

///--END OF LINE