import React, { Component } from "react";
import DataService from "../../DataService";
import { Button, MessageList } from "semantic-ui-react";

class SingleMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            likes: this.props.message.likes,
            messageId: this.props.message.id,
        };
        this.client = new DataService();
    }

    handleLike = (event) => {
        const currentUser = JSON.parse(localStorage.getItem("login"));

        const { username } = currentUser.result;
        console.log(username);
        

        const usernameHasLiked = this.state.likes.some(likes => likes.username === username);

        if (usernameHasLiked) {
            return;
        }

        this.client
            .likeMessage(this.state.messageId)
            .then(response => {
                this.setState((latestState) => ({
                    likes: [...latestState.likes, response.data.like],
                }))
            });
        
        
            
    };
    handleDelete = (event) => {
      this.client.deleteMessage(this.state.messageId)
    }
    
    
    
    
    
    render() {
        
        return (
            <MessageList className="messagefeed">
                <ul>
                    <li>{this.props.message.createdAt}</li>
                    <li>{this.props.message.id}</li>
                    <li>{this.props.message.username}</li>
                    <li>{this.props.message.text}</li>
                    <li>{this.state.likes.length}</li>
                </ul>
                <Button
                    size="mini"
                    icon="heart"
                    content="Like"
                    onClick={this.handleLike}
                />
                
                <Button 
                    size="mini"
                    content="Delete"
                    inverted color='red'
                    onClick={this.handleDelete}
                    />
            </MessageList>
        );
    }
}

export default SingleMessage;
