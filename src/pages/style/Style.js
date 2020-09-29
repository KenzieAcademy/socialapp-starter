import React from 'react';
import { userIsAuthenticated } from "../../redux/HOCs";
import './Style.css';
import Menu from "../../components/menu/Menu";
import FootNavBar from "../../components/footNavBar/FootNavBar"

class Style extends React.Component {
    render() {
        return (
            <div>
                <div className="Style">
                    <Menu isAuthenticated={this.props.isAuthenticated} />
                    <h1>This is the "Show us Your Style" page.</h1>
                    <iframe height="500" width="800" frameBorder='0' scrolling='0' src=''
                    ></iframe>
                    <FootNavBar isAuthenticated={this.props.isAuthenticated} />
                </div>
            </div>
        )
    }
}

export default userIsAuthenticated(Style);