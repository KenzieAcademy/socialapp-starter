import React, { component } from 'react'
import PostMessageService from "./PostMessageService"

class PostMessage extends Component {
    constructor(props) {
        super(props)
        this.client = new PostMessageService
        this.state = {
            message: {
                text: ""
            }
        }
    }

    handleSubmit = 

    handleChange = e => {
        this.setState({ [e.target.name.text]: e.target.value });
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
                    <button type="submit" disabled={loading}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default PostMessage