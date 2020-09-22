import React from 'react';
import './About.css';
import Menu from "../../components/menu/Menu";

import { userIsAuthenticated } from "../../redux/HOCs";

class About extends React.Component {
    render() {
        return (
            <div className="About">
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <h1>About the Universe (of Squirrels)</h1>
            </div>
        )
    }
}

export default userIsAuthenticated(About);
