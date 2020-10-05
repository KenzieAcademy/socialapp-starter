import React from 'react';
import { Grid} from 'semantic-ui-react'
import { userIsAuthenticated } from "../../redux/HOCs";
import Menu from "../../components/menu/Menu";
import FootNavBar from "../../components/footNavBar/FootNavBar"
import FlexContainer from "../../components/flexContainer/FlexContainer";
import './Visit.css';



class Visit extends React.Component {
    render() {
        return (
            <div>

                <div className="Visit">
                    <Menu isAuthenticated={this.props.isAuthenticated} />

                    <CommentForm />
                    </div>
                <div className="Visit">
                    <Menu isAuthenticated={this.props.isAuthenticated} />

                    <br />
                    <Grid.Row className="VisitHeader">
                        <h1>Visit the Planets</h1>
                        <FlexContainer />
                        <FootNavBar isAuthenticated={this.props.isAuthenticated} />

                    </Grid.Row>

                </div>
            </div>
        )
    }
}


export default userIsAuthenticated(Visit)
