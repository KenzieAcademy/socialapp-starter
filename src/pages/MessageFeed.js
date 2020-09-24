import React from "react"
import Menu from "../components/menu/Menu"
import { userIsAuthenticated } from "../redux/HOCs";
import MessageList from "../components/messagelist/MessageList"
import FetchService from "../FetchService"

class MessageFeed extends React.Component {
    constructor(props){
        super(props)
        this.client = new FetchService()
        this.state = {
            messages: []
        }
    }
    componentDidMount() {
        this.client.userMessage().then(messageData => {
            this.setState({
                messages: messageData.messages
            })
        })
    }

    handleLike =(messageId, event) => {
        this.client.addLike(messageId).then((data) => {
            this.getMessage()
            
        })
        
    }
    handleRemoveLike = (messageIdex, event) =>{
        
        this.client.getMessage(messageIdex).then(messageData =>{
            let messageLike = messageData.message.likes.find((likeObj) =>{
            let foundUserName = likeObj.username === JSON.parse(localStorage.getItem("login")).result.username
            return foundUserName
            }) 
            if (!messageLike)  {
                return
            } else{
                return this.client.removeLike(messageLike.id)
            }

        }).then(data => {
            this.getMessage()
        })
    }

    render() {
        return (
            <div className="MessageFeed">
                <Menu isAuthenticated={this.props.isAuthenticated}/>
                <MessageList 
                messages={this.state.messages}
                handleLike={this.handleLike}
                handleRemoveLike={this.handleRemoveLike}
                
                />
                
            </div>
        )

    }
}

export default userIsAuthenticated (MessageFeed)
