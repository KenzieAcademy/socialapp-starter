import React from 'react'
import DataService from "../../DataService"
import { Card } from "antd"
import "./Message.css"


class Message extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messageID: ""
        };
        this.client = new DataService()
    }

    handleDelete = (e) => {
        e.preventDefault();
        this.client.deleteMessage(this.props.message.id).then(result => {
            if (result.data.statusCode === 200) {
                alert("You have successfully deleted your message")
            }
        })
    }

    render() {
        const username = JSON.parse(localStorage.getItem("login")).result.username
        let deleteButton
        if (username === this.props.message.username) {
            deleteButton = (<button className="deleteButton" onClick={this.handleDelete}>
                Delete Message?</button>)
        }
        return (

            <li className="Message">
                <Card>
                    <div className="poster">{this.props.message.username} posted:</div>
                    <div className="message-text">{this.props.message.text}</div>
                    {new Date(this.props.message.createdAt).toLocaleString()} {""}
                    {deleteButton}
                </Card>

            </li>)
        {/* /* {this.handleDelete={this.handleDelete.bind(this)}} */ }
        {/* {messageID={this.state.messageID}} */ }

    }
}

export default Message


 // handleDelete = e => {
    //     e.preventDefault();
    //     this.client.deleteMessage(this.state.messageID).then(result => {
    //         alert(result.data)
    //     });
    // };



    // handleDelete(messageToBeDeleted) {
    //     var newMessageID = this.state.filter((_messageID) => {
    //         return _messageID != messageToBeDeleted
    //     });

    //     this.setState({ messageID: newMessageID });
    // }