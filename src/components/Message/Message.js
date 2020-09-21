import React from "react"
import "./message.css"

class Message extends React.Component {
    render () {
        return (
            <div className="Message">
                At {this.props.createdAt}, {this.props.username} posted:
                <br />
                {this.props.text}
        <div className="like-count">Likes: {this.props.likes.length}</div>
            </div>
        )
    }
}

export default Message