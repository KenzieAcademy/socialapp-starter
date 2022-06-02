import React from 'react';
import { userIsAuthenticated } from "../../redux/HOCs";
import Menu from "../../components/menu/Menu";

import './Style.css';

class Style extends React.Component {
    render() {
        return (
            <div>
                <div className="Style">
                    <Menu isAuthenticated={this.props.isAuthenticated} />
                    <h1>This is the "Show us Your Style" page.</h1>

                </div>
            </div>
        )
    }
}

export default userIsAuthenticated(Style);