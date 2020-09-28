import React from "react"

class Message extends React.Component{
    render () {
        return (
            <li className="Message">
                At {this.props.createdAt}, {this.props.username} posted: 
                <br /> {this.props.text}
        <div className="like-count">{this.props.likes.length}</div>
            </li>
        )
    }
}

export default Message