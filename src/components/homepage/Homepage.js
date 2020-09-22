import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import { Button, } from 'semantic-ui-react'
import Team from "./assets/Team.png"


class Homepage extends React.Component {
    render() {
        return (
            <div className="Home">
                <h1>Welcome to World Music Coalition (WMC)!</h1>
                <p>World Music Coalition WMC works with musicians, composers and industry stakeholders to identify
                solutions to shared challenges. We promote strategies, policies, technologies
                and educational initiatives that always put artists first while recognizing
                the role music fans play in shaping the future.
                WMC works to ensure that diversity, equality and creativity drives artist engagement
                with the global music community, and that these values are reflected in laws, licenses,
                and policies that govern any industry that uses music as raw material for its business.
                Codefactory Team aimed to provide a place for artist all over the world to share and commenucete
                using their Social App.
                  </p>

                <h1>Codefactory Team:</h1>
                <div className="Team">
                    <img src={Team} width="600" height="500" />
                </div>
                <div>
                <li>Mike Bartosz </li>
                <li>Paul Stout </li>
                <li>Evgeniya Rangaeva </li>
                <li>Dervin White</li>
                <li>Muayad Bakhtan</li>
                </div>




                <Button color="blue" >
                    <Link to="./profile/:username">back to profile</Link>
                </Button>



            </div>
        );
    }
}



export default Homepage;
