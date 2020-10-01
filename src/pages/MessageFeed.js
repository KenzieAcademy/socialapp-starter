import React from "react"
import Menu from "../components/menu/Menu"
import { userIsAuthenticated } from "../redux/HOCs";
import MessageList from "../components/messagelist/MessageList"
import FetchService from "../FetchService"
import { Message, Button, TextArea, Form, Popup } from "semantic-ui-react"

class MessageFeed extends React.Component {
    constructor(props) {
        super(props)
        this.client = new FetchService()
        this.state = {
            messages: [],
            submitted: false,
            messageData: {
                input: ""
            }
        }
    }


    componentDidMount() {
        this.getMessage()
    }
    getMessage() {
        this.client.userMessage().then(messageData => {
            this.setState({
                messages: messageData.messages
            })
        })

    }
    handleLike = (messageId, event) => {
        this.client.addLike(messageId).then((data) => {
            this.getMessage()

        })

    }
    handleRemoveLike = (messageIndex, event) => {
        let clickedMessage = this.state.messages[messageIndex]

        let messageLike = clickedMessage.likes.find((likeObj) => {
            let foundUserName = likeObj.username === JSON.parse(localStorage.getItem("login")).result.username
            return foundUserName
        })
        if (!messageLike) {
            return
        } else {
            return this.client.removeLike(messageLike.id).then(() => { this.getMessage() })
        }



    }

    handleChange = (event) => {
        let messageData = this.state.messageData
        messageData[event.target.name] = event.target.value

        this.setState({ messageData })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.client.createMessage(this.state.messageData.input).then(() => {this.getMessage()})
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
                
                <div className="MessageFeed">
                    <MessageList
                        messages={this.state.messages}
                        handleLike={this.handleLike}
                        handleRemoveLike={this.handleRemoveLike}

                    />

                </div>
            </div>
        )

    }
}

export default userIsAuthenticated(MessageFeed)
