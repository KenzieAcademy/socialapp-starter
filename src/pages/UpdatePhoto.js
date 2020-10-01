import React from "react";
import { userIsAuthenticated } from "../redux/HOCs";
import DataService from "../DataService"
import Menu from "../components/menu/Menu"
import UsersPic from "../components/usersPic/UsersPic";
import whoops from "../components/assets/images/whoops.png"
import { Link } from "react-router-dom"

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
        return (
            <div>
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <div>Current Profile Picture:</div>
                <img src={src} alt="Profile" />
                <UsersPic />
                <hr />
                <Link to="/updateprofile/:username">Update Profile</Link>
                <hr />
            </div>
        )
    }

}

export default userIsAuthenticated(UpdatePhoto);