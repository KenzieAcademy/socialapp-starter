import React, { Component } from 'react'
import PostMessageService from "./PostMessageService"
import "./PostMessages.css"
class PostMessage extends Component {
    constructor(props) {
        super(props)
        this.client = new PostMessageService()
        this.state = {
            text: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.client.postMessage(this.state)
    }

    handleChange = e => {
        this.setState({ text: e.target.value });
        console.log(JSON.stringify(this.state))
      };

    render() {
        return (
            <div>
                <form id="new-message" onSubmit={this.handleSubmit}>
                <label htmlFor="message">Type Message: </label>
                    <input
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