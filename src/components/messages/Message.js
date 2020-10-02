import React from 'react';
import PostMessageService from './PostMessageService'

class Message extends React.Component {
    constructor(props){
        super(props)
    
    this.state = {likeCount: this.props.likes.length}
    this.client = new PostMessageService ()
    }
    
    handleLike = () => {
        const messageID = this.props.id
        console.log(messageID)
        // this.client.postLike(messageID)
        // this.setState(latestState => ({likeCount: latestState.likeCount + 1}))
    }
    
    render() { 
        return ( 
            
            <div>
        <li className="messageList">
        at {new Date(this.props.createdAt).toDateString()}
        {this.props.username}
        <div className="textDiv">{this.props.text}</div>
        <div className="messageId">PostId: {this.props.id}</div>
        <div className="like-Thumb">Likes: {this.state.likeThumb}</div>
        <button onClick={this.handleLike}>
            <img className="image" src="https://opticalprism.ca/wp-content/uploads/2019/09/likes.png" alt="100" width="25px" height="25px" />
             
        </button>
        </li></div>
         );
    }
}
 
export default Message;