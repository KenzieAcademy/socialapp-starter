import React from 'react';
import { userIsAuthenticated } from "../../redux/HOCs";
import './Visit.css';
import Menu from "../../components/menu/Menu";
import CommentForm from '../../components/commentForm/CommentForm';


class Visit extends React.Component {
    render() {
        return (
            <div>
                    <CommentForm />
                <div className="Visit">
                    <Menu isAuthenticated={this.props.isAuthenticated} />
                    <h1>This is the "Visit the Planets" page.</h1>;
                
                </div>
            </div>
        )
    }
}

export default userIsAuthenticated(Visit);
