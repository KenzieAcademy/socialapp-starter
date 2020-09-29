import React from "react"
import { userIsAuthenticated } from "../../redux/HOCs";
import DataService from "../../dataService";

// import "./Message.css"


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
        this.client.deleteMessage({
            id: this.props.id,
            token: this.state.token
        })
        // window.location.reload()
    }


    // this.client.getRecentMessages()



    // refreshMessages = event => {
    //     getRecentMessages()
    //         .then(messages => {
    //             this.setState({ messages })
    //         })
    // }



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
                    <div className="deletePost">
                        <button className="delete" onClick={this.handleDeleteMessage}>🗑️</button>
                    </div>
                }
            </li>
        )

    }
}

export default userIsAuthenticated(Message)