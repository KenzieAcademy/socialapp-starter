import React from "react";
import Menu from "../menu/Menu";
import { Segment } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { userIsAuthenticated } from "../../redux/HOCs";

import FetchService from "../../FetchService";

class UpdateProfileForm extends React.Component {

    constructor(props) {

        super(props);
        this.client = new FetchService();
        this.state = {
            "user": {
                "pictureLocation": null,
                "username": "",
                "displayName": "",
                "about": "",
                "googleId": null,
                "createdAt": "",
                "updatedAt": ""
            },
            "statusCode": ""

        }
    }

    // componentDidMount() {
    //     this.client.getUser(this.props.match.params.username)
    //         .then((userData) => { this.setState(userData) })
    // }


    componentDidMount = () => {
        this.client.getUser(this.props.match.params.username)
            .then((userData) => { this.setState(userData) })
    }



    render() {


        return (
            <div className="UpdateProfile">

                <form id="profile-form">

                    <label htmlFor="username">Username</label>
                    
                    <label htmlFor="displayname">Display Name</label>
                    <input
                        type="text"
                        name="displayName"
                        required
                        value={this.state.displayname}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="about">About: </label>
                    <input
                        type="text"
                        height='200 px'
                        width='200 px'
                        name="about"
                        value={this.state.about}
                        // required
                        onChange={this.handleChange}
                    />

                    <Button secondary type="submit" onClick={this.handleRegister}>
                        Update my Profile
                    </Button >


                </form>


            </div>



        );
    }

}
export default userIsAuthenticated(UpdateProfileForm);