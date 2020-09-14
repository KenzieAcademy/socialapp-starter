import React from "react";
import Spinner from "react-spinkit";
import "./deletionForm.css";
import DataService from "../../dataService/dataService";

class DeleteUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "username": "string",
            "statusCode": 0
        };
        this.client = new DataService();
    }


    handleDeletion = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    //Check for error with deletion process
    deleteUser = () => {
        this.client.deleteUser()
            .then(data => {
                console.log(data)
            }).catch(error => {
                console.log(error)
            })
    }
    render() {
        const { loading, error } = this.props;

        return (
            <div className="DeletionForm">
                <form id="deletion-form" onSubmit={this.handleDeletion}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        autoFocus
                        required
                        onChange={this.handleChange}
                    />
                    <button type="danger" disabled={loading}>
                        Are you sure you want to DELETE ?
          </button>
                </form>
                {loading && <Spinner name="circle" color="blue" />}
                {error && <p style={{ color: "red" }}>{error.message}</p>}
            </div>
        )
    }
}
export default DeleteUser

