import React from "react";
import { userIsAuthenticated } from "../redux/HOCs";
import DataService from "../DataService"
import Menu from "../components/menu/Menu"
import UsersPic from "../components/usersPic/UsersPic";
import whoops from "../components/assets/images/whoops.png"
import { Link } from "react-router-dom"
import "../index.css"

class UpdatePhoto extends React.Component {
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
        let src = whoops
        if (this.state.data.pictureLocation) {
            src = "http://socialapp-api.herokuapp.com" + this.state.data.pictureLocation
        }

        let username = false
        if (JSON.parse(localStorage.getItem('login')).result != null) {
            username = JSON.parse(localStorage.getItem('login')).result.username
        }
        return (
            <div>
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <div>Current Profile Picture:</div>
                <img className="update-picture" src={src} alt="Profile" />
                <UsersPic />
                <hr />
                <Link to={"/updateprofile/" + username}>Update Profile</Link>
                <hr />
            </div>
        )
    }

}

export default userIsAuthenticated(UpdatePhoto);