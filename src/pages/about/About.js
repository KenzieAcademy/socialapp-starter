import React from 'react';
import './About.css';
// import CommentForm from "../../components/commentForm/CommentForm"
import Menu from "../../components/menu/Menu";
import { userIsAuthenticated } from "../../redux/HOCs";

class About extends React.Component {
    render() {
        return (
            <div className="About">
                
                {/* <CommentForm /> */}
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <h1>This is the "About the Universe" page.</h1>;
            </div>
        )
    }
}

export default userIsAuthenticated(About);
