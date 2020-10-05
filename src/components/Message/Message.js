import React from "react"
import "./message.css"
import QuestboardService from "../servicesPage/ServicePage"
import Dice from "../../media/Dice.png"

class Message extends React.Component {

    state = {
        likecount: this.props.likes.length
    }

    handleLike = () => {
        const questboardService = new QuestboardService()
        const loggedInUsername = questboardService.getUsername()
        if (this.props.likes.some(likeObject => likeObject.username === loggedInUsername)) return

        questboardService.Like(this.props.id)
            .then(likeObject => {
                this.setState(latestState => ({ likecount: latestState.likecount + 1 }))

            })
    }
    render() {
        return (
            <div className="Message">
                At {this.props.createdAt}, {this.props.username} posted:
                <br />
                {this.props.text}
                <div className="likecount">
                    Nat 20 "(likes)": {this.state.likecount}
                </div>
                <button onClick={this.handleLike}><img src={Dice} alt="Dice" /></button>
            </div>
        )
    }
}

export default Message