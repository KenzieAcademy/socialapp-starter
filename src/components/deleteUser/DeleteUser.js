import React from "react";
import Spinner from "react-spinkit";
import "./DeletionForm.css";
import DataService from "../../DataService";

class DeleteUser extends React.Component {
    constructor(props) {
        super(props)
        this.client = new DataService();
    }



    //Check for error with deletion process
    deleteUser = (e) => {
        e.preventDefault()
        console.log("click")
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
                <form id="deletion-form" onSubmit={this.deleteUser}>
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

