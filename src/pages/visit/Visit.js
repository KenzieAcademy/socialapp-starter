import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import { userIsAuthenticated } from "../../redux/HOCs";
import Menu from "../../components/menu/Menu";
import FlexContainer from "../../components/flexContainer/FlexContainer";
import UserComments from "../../components/userComments/UserComments";
import './Visit.css';
// import FlexContainer from "../../components/flexContainer/FlexContainer";

class Visit extends React.Component {
    render() {
        return (
            <div>
                <div className="Visit">
                    <Menu isAuthenticated={this.props.isAuthenticated} />
                    <br />
                    <Grid.Row className="VisitHeader">
                        <h1>Visit the Planets</h1>
                        {/* <div>
                            <Image src={require("../../components/assets/images/alternates/CatVsSquirrel.jpg")} />
                        </div> */}
                        <FlexContainer />
                    </Grid.Row>
                    <div className="Comments">
                        <UserComments />
                    </div>
                </div>
            </div>
        )
    }
}

export default userIsAuthenticated(Visit)

{/* <Grid columns={3} divided>
    <Grid.Row>
        <Grid.Column width="10" centered="true">
            <div className="Mercury">Information for your visit to Mercury</div>
            <Image size="small" rounded src='assets/images/planets/Mercury.jpg' />
        </Grid.Column>
        <Grid.Column width="10" centered="true">
            <div className="Mercury">Information for your visit to Mercury</div>
            <Image size="small" rounded src='assets/images/planets/Mercury.jpg' />
        </Grid.Column>
        <Grid.Column width="10" centered="true">
            <div className="Mercury">Information for your visit to Mercury</div>
            <Image size="small" rounded src='assets/images/planets/Mercury.jpg' />
        </Grid.Column>
    </Grid.Row>

    <Grid.Row>
        <Grid.Column width="10" centered="true">
            <div className="Mercury">Information for your visit to Mercury</div>
            <Image size="small" rounded src='assets/images/planets/Mercury.jpg' />
        </Grid.Column>
        <Grid.Column width="10" centered="true">
            <div className="Mercury">Information for your visit to Mercury</div>
            <Image size="small" rounded src='assets/images/planets/Mercury.jpg' />
        </Grid.Column>
        <Grid.Column width="10" centered="true">
            <div className="Mercury">Information for your visit to Mercury</div>
            <Image size="small" rounded src='assets/images/planets/Mercury.jpg' />
        </Grid.Column>
    </Grid.Row>

    <Grid.Row>
        <Grid.Column width="10" centered="true">
            <div className="Mercury">Information for your visit to Mercury</div>
            <Image size="small" rounded src='assets/images/planets/Mercury.jpg' />
        </Grid.Column>
        <Grid.Column width="10" centered="true">
            <div className="Mercury">Information for your visit to Mercury</div>
            <Image size="small" rounded src='assets/images/planets/Mercury.jpg' />
        </Grid.Column>
        <Grid.Column width="10" centered="true">
            <div className="Mercury">Information for your visit to Mercury</div>
            <Image size="small" rounded src='assets/images/planets/Mercury.jpg' />
        </Grid.Column>
        <Grid.Column width="10" centered="true">
            <div className="Mercury">Information for your visit to Mercury</div>
            <Image size="small" rounded src='assets/images/planets/Mercury.jpg' />
        </Grid.Column>
    </Grid.Row>
</Grid> */}