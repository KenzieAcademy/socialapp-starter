import React from 'react';

import { Grid, Image } from 'semantic-ui-react';
import { userIsAuthenticated } from "../../redux/HOCs";
import Menu from "../../components/menu/Menu";
<<<<<<< HEAD

import Arjun from "../../components/assets/images/Squirrels/Arjun.jpg";
// import SideBar from "../../components/sideBar/SideBar";
import FootNavBar from "../../components/footNavBar/FootNavBar";

// export default class HelloArjun extends Component {
//     render() {
//         return <img url={Arjun} width="100" height="100" />
//     }
// }
=======
import './Meet.css';
>>>>>>> master

class Meet extends React.Component {
    render() {
        return (
            <div className="Meet">
                <Menu isAuthenticated={this.props.isAuthenticated} />
<<<<<<< HEAD
                {/* <SideBar isAuthenticated={this.props.isAuthenticated} /> */}

                <div>
                    <h1>This is the "Meet the Squirrels" Page</h1>
                    <h3>Arjun</h3>
                    <div className="Arjun">Hi, Arjun!</div>
                    <h3>Ashleigh</h3>
                    <div className="Ashleigh">Hi, Ashleigh!</div>
                    <h3>Cynthia</h3>
                    <div className="Cynthia">Hi, Cynthia!</div>
                    <h3>Joseph</h3>
                    <div className="Joseph">Hi, Joseph!</div>
                </div>
                <FootNavBar isAuthenticated={this.props.isAuthenticated} />
            </div>
=======
                <br />
                <Grid.Row className="Squirrels Header">
                    <h1>"Meet the Squirrels"</h1>
                </Grid.Row>
                <br />
                <br />

                <Grid columns={3} relaxed='very'>
                    <Grid.Row>
                        <Grid.Column>
                            <div className="Arjun">Arjun</div>
                            <Image size="small" rounded src='assets/images/Squirrels/Arjun.jpg' />
                        </Grid.Column>
                        <Grid.Column>
                            <div className="Ashleigh">Ashleigh</div>
                            <Image size="small" rounded src='assets/images/Squirrels/Ashleigh.jpg' />
                        </Grid.Column>
                        <Grid.Column>
                            <div className="Cynthia">Cynthia</div>
                            <Image size="small" rounded src='assets/images/Squirrels/Cynthia.jpg' />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column >
                            <div className="Joseph">Joseph</div>
                            <Image size="small" rounded src='assets/images/Squirrels/Joseph.jpg' />

                        </Grid.Column>
                        <Grid.Column>
                            <div className="Jon">Jon</div>
                            <Image size="small" rounded src='assets/images/Squirrels/Jon.jpg' />
                        </Grid.Column>
                        <Grid.Column>
                            <div className="Peter">Peter</div>
                            <Image size="small" rounded src='assets/images/Squirrels/Peter.jpg' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div >
>>>>>>> master
        );
    }
}

export default userIsAuthenticated(Meet)
