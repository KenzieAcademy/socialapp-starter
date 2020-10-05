import React from "react"
import { userIsAuthenticated } from "../../redux/HOCs";
import DataService from "../../dataService";

// import "./Message.css"


class MessageProfile extends React.Component {
    constructor(props) {
        const loginData = JSON.parse(localStorage.getItem('login'))
        super(props)
        this.client = new DataService()
        this.state = {
            text: "",
            token: loginData.result.token,
            username: loginData.result.username,
            likeCount: this.props.likes.length,
            data: []
        }
    }

    handleDeleteMessage = event => {
        event.preventDefault()

        alert('Do you really want to delete this post?')

        // console.log(this.props.id)
        this.client.deleteMessage({
            id: this.props.id,
            token: this.state.token
        })
        // window.location.reload()
    }

    handleLike = () => {
        const username = this.state.username
        if (this.props.likes.some(like => like.username === username)) {
            // console.log('already liked!!')
            alert('already liked!!')
        } else {
            this.client
                .postLike(
                    {
                        messageId: this.props.id,
                        token: this.state.token
                    })
                .then(
                    this.setState(prevState => ({ likeCount: prevState.likeCount + 1 }))
                )
        }
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
                    <button onClick={this.handleLike}>
                        <span className="spanlike" role="img" aria-label="samsung">
                            <div className="like-count">👍{this.props.likes.length}</div> </span>
                    </button>

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

export default userIsAuthenticated(MessageProfile)
