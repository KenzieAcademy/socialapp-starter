import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import { userIsAuthenticated } from "../../redux/HOCs";
import Menu from "../../components/menu/Menu";
<<<<<<< HEAD
import FootNavBar from "../../components/footNavBar/FootNavBar"
=======
import FlexContainer from "../../components/flexContainer/FlexContainer";
import Scroll from "../../components/scroll/Scroll";
import './Visit.css';
// import FlexContainer from "../../components/flexContainer/FlexContainer";
>>>>>>> master

class Visit extends React.Component {
    render() {
        return (
            <div>
                <div className="Visit">
                    <Menu isAuthenticated={this.props.isAuthenticated} />
<<<<<<< HEAD
                    <h1>This is the "Visit the Planets" page.</h1>;
                    <FootNavBar isAuthenticated={this.props.isAuthenticated} />
=======
                    <br />
                    <Grid.Row className="VisitHeader">
                        <h1>Visit the Planets</h1>
                        {/* <Scroll /> */}
                        <FlexContainer />
                    </Grid.Row>
>>>>>>> master
                </div>
            </div>
        )
    }
}

export default userIsAuthenticated(Visit)

