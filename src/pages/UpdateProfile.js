import React from "react";
// import Menu from "../menu/Menu";
import { Segment } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import { withAsyncAction } from "../redux/HOCs"
import { Link } from 'react-router-dom';
import UpdateProfileForm from '../components/updateProfileForm/UpdateProfileForm'

import FetchService from "../FetchService";

class UpdateProfile extends React.Component {

    constructor(props) {

        super(props);
        this.client = new FetchService();
        this.state = {
            formData: {
                about: "",
                displayName: ""

            },
            user: {
                pictureLocation: null,
                username: "",
                displayName: "",
                about: "",
                googleId: null,
                createdAt: "",
                updatedAt: ""
            },
            statusCode: "",
            error: "",
            updated: false

        }
    }

    componentDidMount() {
        console.log('print lodalStorageInfo');
        console.log(JSON.parse(localStorage.getItem('login')));

        this.client.getUser(this.props.match.params.username)
            .then((responseUserData) => {
                this.setState({
                    user: responseUserData.user,
                    formData: {
                        displayName: responseUserData.user.displayName,
                        about: responseUserData.user.about
                    }

                })
            })
    }

    handleUpdateProfile = (event) => {
        event.preventDefault();
        this.client.updateUser(this.state.user.username, this.state.formData)
            .then((responseUserData) => {
                console.log(responseUserData);

                if (responseUserData.statusCode === 200) {
                    this.setState({
                        statusCode: "200",
                        error: "",
                        updated: true,
                        user: responseUserData.user,
                        formData: {
                            displayName: responseUserData.user.displayName,
                            about: responseUserData.user.about
                        }

                    })
                } else {
                    this.setState({
                        error: responseUserData.message
                    })
                }

            })
    }

    handleChange = (event) => {
        const newformData = { ...this.state.formData };
        newformData[event.target.name] = event.target.value;

        this.setState({ formData: newformData });
    };

    // ==Handle DELETE profile button=======================
    //==get token from LocalStorage, save it in variable, then logout, 
    //==then run API deleteUser endpoint
    //== MUST USE 'export default withAsyncAction("auth", "logout")(UpdateProfile)'

    handleDeleteProfile = (event) => {
        let token = JSON.parse(localStorage.getItem('login')).result.token;
       
        this.props.logout()
        .then(this.client.deleteUser(this.state.user.username, token))
    }



    render() {
        let result_message = "";

        if (!this.state.updated && this.state.error !== "") {
            result_message =
                (
                    <div>
                        <p style={{ color: "red" }}>  Your data is incorrect. Plase try again.
         <br></br>
         Details: {"Details: " + this.state.error}
                        </p>

                    </div>
                )
        } else if (this.state.updated && this.state.error === "") {
            result_message = (

                <div>
                    <p style={{ color: "blue" }}> You successfully updated your profile! </p>

                </div>
            )
        }


        return (
            <div className="UpdateProfile">


                <Menu isAuthenticated={this.props.isAuthenticated} />
                <h2>Update My Profile</h2>
                <h3> {this.state.user.username + "  |  @" + this.state.user.displayName}</h3>

                <UpdateProfileForm
                    formData={this.state.formData}
                    handleChange={this.handleChange}
                    handleUpdateProfile={this.handleUpdateProfile}

                />

                {result_message}


                <Link to={"/profile/" + this.props.match.params.username}>Go to My Profile</Link>
                <br />
                <button onClick={this.handleDeleteProfile}><Link to="/">Delete Profile</Link></button>

            </div >

        );
    }

}
// export default userIsAuthenticated(UpdateProfile);
export default withAsyncAction("auth", "logout")(UpdateProfile);
