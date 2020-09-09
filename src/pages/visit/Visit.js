import React from 'react';
import { userIsAuthenticated } from "../../redux/HOCs";
import './Visit.css';

class Visit extends React.Component {
    render() {
        return (
            <div className="Visit">
                <p>This is the "Visit the Planets" page.</p>;
            </div>
        )
    }
}

export default userIsAuthenticated(Visit);