import React from 'react'
import DataService from "../../DataService"


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
            alert(result.data)
            // console.log("delete")
        })
    }

    render() {
        const username = JSON.parse(localStorage.getItem("login")).result.username
        let deleteButton
        if (username === this.props.message.username) {
            deleteButton = (<button onClick={this.handleDelete}>
                Delete Message</button>)
        }
        return (

            <li className="Message">
                {new Date(this.props.message.createdAt).toDateString()} at {""}
                {this.props.message.username} posted:
                <div className="message-text">{this.props.message.text}</div>
                {/* <div classNAme="likes">Likes:{this.props.likes.length}</div> */}
                {deleteButton}
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