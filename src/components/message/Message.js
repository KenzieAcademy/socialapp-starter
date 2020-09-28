import React from 'react'
import DataService from "../../DataService"

class Message extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: props.likes,
            likeCount: props.likes.length
        }
    }


    handleLike = () => {
        ///creating instance of data service
        const dataService = new DataService()
        //this will get the current logged in user name 
        const username = dataService.getUsername()
        // this instance of message to check if likes are only
        const userAlreadyLiked = this.props.likes.some(like => like.username === username)
        //bails out of handle like method if already liked
        if (userAlreadyLiked) return
        //post a new like   
        dataService.likePost(this.props.id)
            .then(like => {

                //updates the number of likes 
                this.setState(latestState => ({ likeCount: latestState.likeCount + 1 }))
            })

    }

    render() {
        return (
            <li className="Message">
                {this.props.message}
                < button onClick={this.handleLike} > <span role="img" aria-label=" Like">👍
                </span > {this.state.likeCount}</button >
                <br />
            </li>
        )
    }
}

export default Message