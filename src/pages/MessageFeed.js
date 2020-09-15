import React from "react";
import { Link } from "react-router-dom";

class MessageList extends React.Component {
    render() {
        return (
            <div className="MessageList">
                <ul> {this.props.location.pathname}</ul>
                <Link to="/">Go Home</Link>
            </div>
        );
    }
}

export default Messagefeed;
