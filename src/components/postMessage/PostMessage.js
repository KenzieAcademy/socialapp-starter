import React from "react"
import { userIsAuthenticated } from "../../redux/HOCs"
import Service from "../../services/Service"
import "./PostMessage.css"


class PostMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };

        this.client = new Service()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleMessagePost = (event) => {
        event.preventDefault();
        this.client.postMessage(this.state)
        .then((result) => {
            console.log(result.data);
        });
        console.log("Post Button Pressed")
    };

    render() {
        return (
            <div className="Message">
                <div className="postMessageForm">
                    <form className="postMessageFormForm" onSubmit={this.handleMessagePost}>
                        <input
                            type="text"
                            name="text"
                            required
                            onChange={this.handleChange}
                        />
                        <button type="submit">Post Message</button>
                    </form>
                </div>
            </div>
        );
    }
}





export default userIsAuthenticated(PostMessage);