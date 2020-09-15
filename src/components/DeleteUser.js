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
deleteCurrentUser(username, password, statusCode) {
    let userDataToDelete = { ...this.state.USERJSONTOKEN };
    let i = userDataToDelete[username].findIndex(userDataToDelete
        => userDataToDelete.SparePartsID === passoword);

    userDataToDelete(username).splice([i], 1);

    if (userDataToDelete[username].length === 0) {
        delete userDataToDelete[username]
    }
    return deleteCurrentUser(username).then(result => {
        this.setState({
            data: result.data[0]
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