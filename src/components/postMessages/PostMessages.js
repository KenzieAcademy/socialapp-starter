import React from "react";
import DataService from "../../services/dataService";
import Messages from "../messages/Messages";


class PostMessage extends React.Component {
    constructor(props) {
        
        const loginData = JSON.parse(localStorage.getItem('login'))
        super(props)
        this.client = new DataService()
        this.state = {
            text: "",
            token: loginData.result.token,
            username: loginData.result.username
        }
    }


    handlePostMessage = event => {
        event.preventDefault()

        this.client.postMessage({
            text: this.state.text,
            token: this.state.token
        })
            .then(result => {
                console.log(result.data.messages)
                this.setState({
                    text: result.data.messages
                })
            });
        this.setState({ text: "" })
    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {

        return (
            <div className="PostMessage">
                
                <h4>Whats on your Super mind {this.state.username}?</h4>
                <form onSubmit={this.handlePostMessage}>
                    <div>
                        
                        <br />
                        <textarea
                            type="text"
                            name="text"
                            value={this.state.text}
                            placeholder="What's on your mind?"
                            maxLength="255"
                            rows="5"
                            cols="50"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit">Post</button>
                </form>
            </div>
        )
    }
}

export default PostMessage;