import React from 'react';
import './About.css';
import CommentForm from "../../components/commentForm/CommentForm"
import Menu from "../../components/menu/Menu";

import { userIsAuthenticated } from "../../redux/HOCs";

class About extends React.Component {
    render() {
        return (
            <div className="About">
                
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <CommentForm />
                <h1>About the Universe (of Squirrels)</h1>
            </div>
        )
    }
}

export default userIsAuthenticated(About);
