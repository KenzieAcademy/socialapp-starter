import React from 'react';
import { userIsAuthenticated } from "../../redux/HOCs";
import './Play.css';
import Menu from "../../components/menu/Menu";

class Play extends React.Component {
    render() {
        return (
            <div>
                <div className="Play">
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <h1>This is the "Let's Play SpaceBallz!" page.</h1>;
                </div>
            </div>
        )
    }
}

export default userIsAuthenticated(Play);