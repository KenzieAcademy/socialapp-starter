import React from 'react';
import { Icon, Menu, Segment, Sidebar, Grid, Input, Column } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Clock from "../clock/Clock";
import UploadImage from "../addPhoto/AddPhoto";
import "./SideBar.css";

// class SideBar extends React.Component {
//     render() {

const SideBar = () => (
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
                    <div class="ui horizontal segments">
                        <div class="iu segment">
                            <p>
                                {/* <h3>User's Name</h3> */}
                                <UploadImage />
                            </p>
                        </div>

                        <div class="iu segment">
                            <p>
                                <button className="Edit">Edit Profile</button>
                                <h3>About Me</h3>
                                <br></br>
                                <input type="text" />


                                <form className="interests-input">
                                    <label htmlFor="interests-input">Interests</label>
                                    <br></br>
                                    <Input type="text"></Input>

                                </form>
                            </p>

                        </div>
                    </div>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Grid.Column>

    </Grid>
)



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


