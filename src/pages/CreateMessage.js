import React from "react"
import Menu from "../components/menu/Menu"
import FetchService from "../FetchService"
import { Message, Button, TextArea, Form, Popup } from "semantic-ui-react"
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

    resetForm = (event) => {
        this.setState({
            submitted: false,
            messageData: {
                input: ""
            }
        })
    }


    render() {
        let button
        if (this.state.submitted) {
            button = (
                <div className="CreateMessage">
                    <Popup
                        trigger={<Button onClick={this.resetForm}>Reset</Button>}
                        content="Message has been submitted">
                    </Popup>
                </div>
            )
        } else {
            button = (
            <Button
                size="medium"
                color="blue">
                Send
            </Button>
            )
        }
        return (
            <div className="CreateMessage">
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <Message size="big">
                    <Message color="blue">
                        <Form onSubmit={this.handleSubmit}>
                            <TextArea
                                placeholder="Your Message Here:"
                                style={{ minHeight: 100 }}
                                type="text"
                                name="input"
                                value={this.state.messageData.input}
                                onChange={this.handleChange}
                            />
                            {button}
                        </Form>
                    </Message>
                </Message>
            </div>
        )
    }
}



export default userIsAuthenticated(CreateMessage)
