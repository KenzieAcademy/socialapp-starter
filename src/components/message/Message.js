import React from 'react'
import DataService from "../../DataService"
import { Card } from "antd"
import "./Message.css"

class Message extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: props.likes,
            likeCount: props.likes.length,
            messageID: ""
        }
      this.client = new DataService()
    }


    handleLike = () => {
        ///creating instance of data service
        const dataService = new DataService()
        //this will get the current logged in user name 
        const username = dataService.getUsername()
        // this instance of message to check if likes are only
        const userAlreadyLiked = this.props.likes.some(like => like.username === username)
        //bails out of handle like method if already liked
        if (userAlreadyLiked) return
        //post a new like   
        dataService.likePost(this.props.id)
            .then(like => {
                //updates the number of likes 
                this.setState(latestState => ({ likeCount: latestState.likeCount + 1 }))
            })
    }
  

    render() {
        const username = JSON.parse(localStorage.getItem("login")).result.username
        let deleteButton
        if (username === this.props.message.username) {
            deleteButton = (<button className="deleteButton" onClick={this.props.handleDelete}>
                Delete Message?</button>)
        }
        return (
            <li className="Message">
                <Card>
                    <div className="poster">{this.props.message.username} posted:</div>
                    <div className="message-text">{this.props.message.text}</div>
                    {new Date(this.props.message.createdAt).toLocaleString()} {""}
                    <button onClick={this.handleLike} > <span role="img" aria-label=" Like">👍
                    </span > {this.state.likeCount}</button >
                    {deleteButton}
                </Card>

            </li>)

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

