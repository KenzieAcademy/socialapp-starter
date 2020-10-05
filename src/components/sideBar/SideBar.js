import React from 'react';
import { Icon, Menu, Segment, Sidebar, Grid, Input, Column } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Clock from "../clock/Clock";
import UploadImage from "../addPhoto/AddPhoto";
import EditProfile from "../editProfile/EditProfile";
import SocialAppService from "../../SocialAppService";
import "./SideBar.css";

class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayName: "",

        }
        this.client = new SocialAppService()
    }

    // componentDidMount() {
    //     this.getUserDetails();
    // }

    // getUserDetails = (e) => {
    //     this.client.getUser(this.state).then(response => {
    //         this.setState({

    //             displayName: response.data.user.displayName,

    //         })
    //         console.log(response);
    //     });

    // }

    render() {
        return (
            <Grid colums={1}>
                <Grid.Column>
                    <Sidebar.Pushable as={Segment.Group} raised>
                        <Sidebar
                            as={Menu}
                            animation='push'
                            icon='labeled'
                            inverted
                            vertical
                            visible
                            width='thin'
                        >

                            <Clock />

                            <Menu.Item as='a'>
                                <Icon name='space shuttle' />
                                <Link to="/Visit">Visit the Planets!</Link>

                            </Menu.Item>

                            <Menu.Item as='a'>
                                <Icon name='rocket' />
                                <Link to="/Style">Create your style!</Link>
                            </Menu.Item>

                        </Sidebar>

                        <Sidebar.Pusher>

                            <div className="edit-profile">
                                <h3>{this.client.getUserName() || "Profile"}</h3>
                                <UploadImage />
                                <br />
                                <EditProfile />

                            </div>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Grid.Column>

            </Grid >
        )
    }
}
export default SideBar















// import React from "react";
// import Clock from "../../pages/clock/Clock";
// import { withAsyncAction } from "../../redux/HOCs";


// export class SideBar extends React.Component {
//     render() {


//         return (
//             <div>
//                 <Clock isAuthenticated={this.props.isAuthenticated} />

//             </div>
//         );
//     }

// }

// export default withAsyncAction("auth", "login")(SideBar);


