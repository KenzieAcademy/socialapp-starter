import React from 'react';
import { userIsAuthenticated } from "../../redux/HOCs";
import './Play.css';
import Menu from "../../components/menu/Menu";
// import SideBar from "../../components/sideBar/SideBar"
import FootNavBar from "../../components/footNavBar/FootNavBar"

class Play extends React.Component {
    render() {
        return (
            <div>
                <div className="Play">
                    <Menu isAuthenticated={this.props.isAuthenticated} />
                    {/* <SideBar isAuthenticated={this.props.isAuthenticated} /> */}
                    <h1>Let's Play SpaceBallz!</h1>
                    <div className="Gamebox">
                        <iframe height="800" width="1080" scrolling="0" src='http://www.freearcade.com/SpaceBalls.flash/SpaceBalls.html'
                        ></iframe>

                    </div>
                    <br></br>
                    <br></br>
                    <FootNavBar isAuthenticated={this.props.isAuthenticated} />
                </div>
            </div>
        )
    }
}

export default userIsAuthenticated(Play);