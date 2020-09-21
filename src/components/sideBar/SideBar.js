import React from 'react';
import { Header, Icon, Menu, Segment, Sidebar, Grid, Input, Container } from 'semantic-ui-react';
import "./SideBar.css"
import { Link } from "react-router-dom";
import Clock from "../../pages/clock/Clock";

import UploadImage from "../addPhoto/AddPhoto";


const SidebarVisible = () => (
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
                        Visit the Planets!
                    </Menu.Item>

                    <Menu.Item as='a'>
                        <Icon name='rocket' />
                        <Link to="/Style">Create your style!</Link>
                    </Menu.Item>

                </Sidebar>


                <Sidebar.Pusher>
                    <div class="ui left aligned container">
                        <div className="profile-pic">

                            <h3>User's Name</h3>
                            <UploadImage />
                        </div>
                    </div>
                    <div class="ui center aligned container">
                        <div className="profile-content">
                            <div className="edit-profile">
                                <h3>About Me</h3>
                                <button className="Edit">Edit Profile</button>
                                <br></br>
                                <input type="text" />


                                <form className="interests-input">
                                    <label htmlFor="interests-input">Interests</label>
                                    <br></br>
                                    <Input type="text"></Input>

                                </form>
                            </div>
                        </div>
                    </div>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Grid.Column>

    </Grid>
)

export default SidebarVisible















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


