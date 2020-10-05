import React from "react";
import Spinner from "react-spinkit";
import "./DeletionForm.css";
import DataService from "../../DataService";
import WarningSign from "../assets/images/Warning-Sign.png";



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
                localStorage.clear();
                window.location.reload();

            }).catch(error => {
                console.log(error)
            })
    }
    render() {
        const { loading, error } = this.props;

        return (
            <div className="DeletionForm">
                <form id="deletion-form" onSubmit={this.deleteUser}>
                    <button 
                    type="primary" 
                    >
                        DELETE your Profile?
                    </button>
                    <img className="WarningSign" src={WarningSign} alt="WarningSign" />
                </form>
                {loading && <Spinner name="circle" color="blue" />}
                {error && <p style={{ color: "red" }}>{error.message}</p>}
            </div >
        )
    }
}
export default DeleteUser

