import React from "react";
import { userIsAuthenticated } from "../redux/HOCs";
import DataService from "../DataService"
import Menu from "../components/menu/Menu"
import UpdateUserForm from "../components/updateUserForm/UpdateUserForm"
import DeleteUser from "../components/deleteUser/DeleteUser";
import { Link } from "react-router-dom"


class UpdateProfile extends React.Component {
    constructor(props) {
        super(props)
        this.client = new DataService()
        this.state = {
            data: {}
        }
    }

    getUserData() {
        return this.client.getUser().then(result => {
            this.setState({
                data: result.data.user
            })
        })
    }

    componentDidMount() {
        this.getUserData()
    }

    render() {
        return (
            <div>
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <UpdateUserForm displayName={this.state.data.displayName} about ={this.state.data.about} />
                <hr />
                <Link to="/updatephoto/:username">Update Profile Photo</Link>
                <hr />
                <DeleteUser />
            </div>
        )
    }

}

export default userIsAuthenticated(UpdateProfile);