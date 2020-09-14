import React, { Component } from 'react'
import PostMessageService from "./PostMessageService"

class PostMessage extends Component {
    constructor(props) {
        super(props)
        this.client = new PostMessageService
        this.state = {
            message: ""
        }
    }

    handleSubmit = e => {
        this.client.postMessage(this.state.message)
    }

    handleChange = e => {
        this.setState({ message: e.target.value });
        console.log(this.state.message)
      };

    render() {
        return (
            <div>
                <form id="new-message" onSubmit={this.handleSubmit}>
                <label htmlFor="message">Message</label>
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