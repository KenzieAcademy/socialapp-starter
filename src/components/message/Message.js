import React from 'react';
import DataService from '../dataService';

class Message extends React.Component {

    state = { likeCount: this.props.likes.length }

    handleLike = () => {
        const dataService = new DataService()
        const username = dataService.getUsername()
        if (this.props.likes.some(like => like.username === username))

            dataService
                .postLike(this.props.di)
                .then(like => {
                    this.setState(latestState => ({ likeCount: latestState.like.length }))
                })

    }


    render() {
        return (
            <li className="Message">
                At {this.props.createdAt}, {this.props.username} posted:
                <br />
                {this.props.text}
                <div className="like-count">{this.props.likes.length}</div>
                <button onClick={this.handleLike}>
                    <span role="img" aria-label="samsung">👍</span>
                </button>
            </li>
        );
    }
}


export default Message;