import React from 'react';
import { userIsAuthenticated } from "../redux/HOCs";
import Menu from "../components/menu/Menu"
import FetchService from "../FetchService";
import { Button, Image, List, Segment } from 'semantic-ui-react'
import MessageList from "../components/messageList/MessageList";
import UserMessage from "../components/userMessage/UserMessage"
import "../index.css"

class MessageFeed extends React.Component {

    constructor(props) {
        super(props)
        this.client = new FetchService();

        this.messageChange = false;

        this.state = {
            messages: [],

            formData: { text: "" },
            error: "",
            submitted: false

        }
    }

    componentDidMount() {

        this.client.getMessages()
            // .then(messageData => console.log(messageData))
            .then((messageData) => {
                this.setState({
                    messages: messageData.messages
                })
            })
    };

    handleChange = (event) => {
        const newformData = { ...this.state.formData };
        newformData[event.target.name] = event.target.value;

        this.setState({
            formData: newformData,

        });
    };

    handlePosMessage = (event) => {
        event.preventDefault();

        this.client.postMessage(this.state.formData)
            .then((resData) => {

                if (resData.statusCode === 200) {
                    this.setState({
                        submitted: true,
                        error: "",
                        formData: { text: "" }
                    })
                } else {

                    this.setState({
                        error: resData.message
                    })
                }
            }).then(() => {
                this.client.getMessages()
                // run the code in DidMount method
                .then((messageData) => {
                    this.setState({
                        messages: messageData.messages
                    })
                })
            })
    }

    handleLike = (messageId, event) => {
        // console.log("Hi from HandleLike")
        this.client.addLike(messageId)
            //get messageList again (refresh)

            .then((resData) => {

                console.log(resData);
                console.log(resData.message);

                this.client.getMessages()
                    .then(messageData => {
                        this.setState({
                            messages: messageData.messages
                        })

                    })
            })
    }

    handleRemoveLike = (messageId, event) => {
        this.client.getMessage(messageId).then((messageData) => {

            console.log("*********");
            console.log(messageData);
            console.log(messageData.message.likes);
            let name = JSON.parse(localStorage.getItem('login')).result.username;
            console.log(name)
            const foundLike = messageData.message.likes.find(likeObj => likeObj.username === name);
            console.log(foundLike)
            console.log("*********");

            if (foundLike !== undefined) {
                console.log(foundLike.id);
                this.client.deleteLike(foundLike.id)

                    .then((resData) => {
                        this.client.getMessages()
                            .then(messageData => {
                                this.setState({
                                    messages: messageData.messages
                                })
                            })

                    })

            } else {
                console.log("you did not like this message before")
            }

        })

    }

    render() {
        return (
        
            <div className="MessageFeed">
                <Menu isAuthenticated={this.props.isAuthenticated} />

                <div className="message_field_format">
                    <br/>
                <br/>
                    <div className="auto_scroll">
                        <MessageList messages={this.state.messages} handleLike={this.handleLike}
                            handleRemoveLike={this.handleRemoveLike} />
                    </div>
                    <div className="centralize_elements">

                        {/* <UserMessage /> */}
                        <form id="user_message">

                            <label htmlFor="textarea">
                                <strong> Create a Messege:</strong>
                                <br></br>

                                <textarea
                                    className="textarea"
                                    name="text"
                                    placeholder="Type Your Message Here..."

                                    value={this.state.formData.text}
                                    onChange={this.handleChange} >

                                </textarea>

                            </label>
                            <br /> <br />


                            <Button color="orange" onClick={this.handlePosMessage}>
                                Post Your Message
                              </Button >
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default userIsAuthenticated(MessageFeed);