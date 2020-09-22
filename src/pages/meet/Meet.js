import React from 'react';

import { Grid, Image } from 'semantic-ui-react';
import { userIsAuthenticated } from "../../redux/HOCs";
import Menu from "../../components/menu/Menu";
import './Meet.css';

class Meet extends React.Component {
    render() {
        return (
            <div className="Meet">
                <Menu isAuthenticated={this.props.isAuthenticated} />
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
        );
    }
}

export default userIsAuthenticated(Meet)
