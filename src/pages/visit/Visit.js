import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import { userIsAuthenticated } from "../../redux/HOCs";
import Menu from "../../components/menu/Menu";
import PlanetForm from "../../components/planetForm/PlanetForm";
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
                    </Grid.Row>
                    <br />
                    <br />

                    <PlanetForm />

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