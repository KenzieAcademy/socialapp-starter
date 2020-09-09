import React from 'react';
import { userIsAuthenticated } from "../../redux/HOCs";
import './About.css';

class About extends React.Component {
    render() {
        return (
            <div className="About">
                <p>This is the "About the Planets" page.</p>;
            </div>
        )
    }
}

export default userIsAuthenticated(About);
