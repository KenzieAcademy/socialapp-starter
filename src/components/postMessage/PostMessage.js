import React, { Component } from 'react'
import PostMessageService from "./PostMessageService"
import "./PostMessages.css"
class PostMessage extends Component {
    constructor(props) {
        super(props)
        this.client = new PostMessageService()
        this.state = {
            text: "",
            submitted: false
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.client.postMessage(this.state.text)
        const form = document.getElementById("message-input")
        form.value = ""
        this.setState({ submitted: true })
    }

    handleChange = e => {
        this.setState({ text: e.target.value });
      };

    render() {
        return (
            <div>
                <form id="new-message" onSubmit={this.handleSubmit}>
                <label htmlFor="message">Type Message: </label>
                    <input
                        id = "message-input"
                        type="text"
                        name="message"
                        required
                        onChange={this.handleChange}
                    />
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default PostMessage