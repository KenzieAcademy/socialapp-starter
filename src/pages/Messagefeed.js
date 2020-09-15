import React from "react";
import Menu from "../components/menu/Menu";
import { link } from from "react-router-dom";
class MessageFeed extends React.Component {
    render() {
        return (
            <div className="MessageFeed">
                <Link to="/">Message feed</Link>
            </div>
        );
    }
}

export default MessageFeed;
