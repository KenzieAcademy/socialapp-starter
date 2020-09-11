import React from "react";
import PostMessageService from "../../services/PostMessagesService"

class PostMessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };

        this.PostMessageService = new PostMessageService()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleMessagePost = (event) => {
        event.preventDefault();
        this.PostMessageService.postMessage(this.state).then((result) => {
            console.log(result.data);
        });
        console.log("Post Button Pressed")
    };

    render() {
        return (
            <div className="postMessageForm">
                <form className="postMessageFormForm" onSubmit={this.handleMessagePost}>
                    <input
                        type="text"
                        name="text"
                        required
                        onChange={this.handleChange}
                    />
                    <button type="submit">Post Message!</button>
                </form>
            </div>
        );
    }
}

export default PostMessageForm;