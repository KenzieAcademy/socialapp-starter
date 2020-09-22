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
<<<<<<< HEAD
                    {/* <SideBar isAuthenticated={this.props.isAuthenticated} /> */}
                    <h1>This is the "Let's Play SpaceBallz!" page.</h1>;
                    <div className="Gamebox">
                        <iframe height="500" width="500" frameBorder='0' scrolling='0' src='https://www.embed.com/app/arcade/invaders.html'
                        ></iframe>
                    </div>
                    <FootNavBar isAuthenticated={this.props.isAuthenticated} />
=======
                    <h1>This is the "Let's Play SpaceBallz!" page.</h1>
>>>>>>> master
                </div>
            </div>
        )
    }
}

export default userIsAuthenticated(Play);