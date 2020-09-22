import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import { userIsAuthenticated } from "../../redux/HOCs";
import Menu from "../../components/menu/Menu";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import CommentForm from '../../components/commentForm/CommentForm';

=======
>>>>>>> master
import FlexContainer from "../../components/flexContainer/FlexContainer";
import Scroll from "../../components/scroll/Scroll";
import './Visit.css';
// import FlexContainer from "../../components/flexContainer/FlexContainer";
<<<<<<< HEAD
=======
>>>>>>> 432be30d4b443b0b1df72ec53843318c5fa40571
>>>>>>> master

class Visit extends React.Component {
    render() {
        return (
            <div>
<<<<<<< HEAD
                <div className="Visit">
                    <Menu isAuthenticated={this.props.isAuthenticated} />
=======
                    <CommentForm />
                <div className="Visit">
                    <Menu isAuthenticated={this.props.isAuthenticated} />
<<<<<<< HEAD
                    <h1>This is the "Visit the Planets" page.</h1>;
                
=======
>>>>>>> master
                    <br />
                    <Grid.Row className="VisitHeader">
                        <h1>Visit the Planets</h1>
                        {/* <Scroll /> */}
                        <FlexContainer />
                    </Grid.Row>
<<<<<<< HEAD
=======
>>>>>>> 432be30d4b443b0b1df72ec53843318c5fa40571
>>>>>>> master
                </div>
            </div>
        )
    }
}

<<<<<<< HEAD
export default userIsAuthenticated(Visit)

=======
<<<<<<< HEAD
export default userIsAuthenticated(Visit);
=======
export default userIsAuthenticated(Visit)

>>>>>>> 432be30d4b443b0b1df72ec53843318c5fa40571
>>>>>>> master
