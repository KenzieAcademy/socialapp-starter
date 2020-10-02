import React from "react";
import Menu from "../components/menu/Menu"
import api from "../services/BackendService"
import Message from "../components/message/Message"
import PostMessage from "../components/postMessage/PostMessage"
import PostMessageService from "../services/DataService"


class MessageList extends React.Component {
    state = { messages: [], text: "" }

    componentDidMount() {
        api.getAllMessages().then(response => {
            this.setState({ messages: response.data.messages })

        })
    }
    handleMessagePost = (event) => {
        event.preventDefault();
        new PostMessageService().postMessage({ text: this.state.text }).then((result) => {
            console.log(result.data);
        });
        console.log("Post Button Pressed")
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    render() {
        if (this.state.messages.length === 0) {
            return (
                <div className="MessageList">
                    <Menu />
                    <h1>MessageList</h1>
                    <h3>LOADING...</h3>
                </div>
            )
        }
        return (
            <div className="MessageList">
                <Menu />
                <h1>Message Feed</h1>
                <PostMessage handleChange={this.handleChange} handleMessagePost={this.handleMessagePost} text={this.state.text} />

                <ul>
                    {this.state.messages.map(messageObject => (
                        <Message key={messageObject.id} {...messageObject} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default MessageList;
