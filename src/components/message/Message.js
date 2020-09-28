import React from "react"
import "./Message.css"

class Message extends React.Component {
    render() {
        return (
            <li className="Message">
                At {this.props.createdAt}, {this.props.username} posted:
                <br />
                {this.props.text}
                <div className='like-count'>Likes: {this.props.likes.length}</div>
                {/* <div className="delete">
                    <button>🗑️</button>
                </div> */}
            </li>
        )
    }
}

export default Message