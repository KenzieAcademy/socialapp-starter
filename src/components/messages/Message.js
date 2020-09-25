import React from 'react';

class Message extends React.Component {
    state = {likeThumb: this.props.likes.length}
    handleLike = () => {
        this.setState(latestState => ({likeThumb: latestState.likeThumb + 1}))
    }
    render() { 
        return ( 
            <div>
        <li className="messageList">
        at {new Date(this.props.createdAt).toDateString()}
        {this.props.username}
        <div className="textDiv">{this.props.text}</div>
        <div className="like-Thumb">Likes: {this.state.likeThumb}</div>
        <button onClick={this.handlesLike}>
            <img className="image" src="https://opticalprism.ca/wp-content/uploads/2019/09/likes.png" alt="100" width="25px" height="25px" />
             
        </button>
        </li></div>
         );
    }
}
 
export default Message;