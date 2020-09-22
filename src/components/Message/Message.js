import React from "react"
import "./message.css"
import QuestboardService from "../../pages/ServicePage"
// import Dice from "../../media/Dice.png"

class Message extends React.Component {

    state = { likecount: this.props.likes.length}

    handleLike = () => {
        const questboardService = new QuestboardService
        const loggedInUsername = questboardService.getUsername()
        if (this.props.likes.some(likeObject => likeObject.username === loggedInUsername)) return
    
    questboardService
        .Like(this.props.id)
        .then(likeObject => {
            this.setState(latesState => ({ likecount: latesState.likecount + 1}))
        })
    }

    render () {
        return (
            <div className="Message">
                At {this.props.createdAt}, {this.props.username} posted:
                <br />
                {this.props.text}
                <div className="likecount">
                    Likes: {this.state.likecount}
                </div>
                <button onClick ={this.handleLike}><span role="img" aria-label="Like">"thumbs up"</span></button>
            </div>
        )
    }
}

export default Message