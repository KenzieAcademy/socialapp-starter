import React from "react"
import { userIsAuthenticated } from "../redux/HOCs"


class PostMessage extends React.Component {

    render() {
        return (
            <div className="Message">
                
                
                <div className="postMessageForm">
                    <form className="postMessageFormForm" onSubmit={this.props.handleMessagePost}>
                        <input
                            type="text"
                            name="text"
                            required
                            onChange={this.props.handleChange}
                            value = {this.props.text}
                        />
                        <button type="submit">Post Message</button>
                    </form>
                </div>
            </div>
        );
    }
}





export default userIsAuthenticated(PostMessage);