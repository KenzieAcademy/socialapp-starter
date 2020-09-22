import React, { Component } from 'react'
import DeleteMessageService from "./DeleteMessageService"

class DeleteMessage extends Component {
    constructor(props) {
        super(props)
        this.client = new DeleteMessageService()
        this.state = {
            text: ""
        }
    }

    handleSubmit = e => {
        this.client.DeleteMessage(this.state)
    }

    handleChange = e => {
        this.setState({ text: e.target.value });
        console.log(JSON.stringify(this.state))
      };

    render() {
        return (
            <div>
                <form id="delete-message" onSubmit={this.handleSubmit}>
                <label htmlFor="message">Delete Message</label>
                    <input
                        type="text"
                        name="deleteMessageInput"
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

export default DeleteMessage