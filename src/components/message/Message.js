import React from "react"
import "./Message.css"
import DataService from "../../dataService";

class Message extends React.Component {
    constructor(props) {
        const loginData = JSON.parse(localStorage.getItem('login'))
        super(props)
        this.client = new DataService()
        this.state = {
            text: "",
            token: loginData.result.token,
            username: loginData.result.username
        }
    }

    handleDeleteMessage = event => {
        event.preventDefault()

        alert('Do you really want to delete this post?')
        console.log(this.props.id)
        this.client.deleteMessage(this.props.id)

    }

    render() {
        return (
            <li className="Message">
                At {this.props.createdAt}, {this.props.username} posted:
                <br />
                {this.props.text}
                <div className='like-count'>
                    Likes: {this.props.likes.length}
                    <br />
                    <button className="like" >👍</button>
                </div>
                { this.props.username === this.state.username &&
                    <div className="delete">
                        <button onClick={this.handleDeleteMessage}>🗑️</button>
                    </div>
                }
            </li>
        )
    }
}

export default Message