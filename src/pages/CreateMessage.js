import React from "react"
import Menu from "../components/menu/Menu"
import FetchService from "../FetchService"
import { userIsAuthenticated } from "../redux/HOCs"

class CreateMessage extends React.Component {
    constructor(props) {
        super(props)
        this.client = new FetchService()
        this.state = {
            submitted: false,
            messageData: {
                input: ""
            }
        }

    }

    handleChange = (event) => {
        let messageData = this.state.messageData
        messageData[event.target.name] = event.target.value

        this.setState({ messageData })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.client.createMessage(this.state.messageData.input)
        this.setState({
            submitted: true
        })
    }


    render() {
        return (
            <div className="CreateMessage">
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="input">
                        Message Here:
                    </label>
                    <input
                        type="text"
                        name="input"
                        value={this.state.messageData.input}
                        onChange={this.handleChange}
                    />
                    <button type="submit">
                        Send
                        </button>
                </form>
            </div>
        )
    }
}



export default userIsAuthenticated(CreateMessage)
