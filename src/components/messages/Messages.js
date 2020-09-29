import DataService from "../../services/dataService";
import React from "react";

class Messages extends React.Component {

    state = { likeCount: this.props.likes.length }

    handleLike = () => {
        const dataService = new DataService()
        const username = dataService.getUsername()

        if (this.props.likes.some(like => like.username === username)) return

        dataService
            .postLike(this.props.id)
            .then(like => {
                console.log(like)
                this.setState(latestState => ({ likeCount: latestState.likeCount + 1 }))
            })
    }
    render() {
        return (
            <li className="Messages">
                At {this.props.createdAt}, {this.props.username} posted:
                <br />
                {this.props.text}
                <div className="like-count">
                    Likes: {this.props.likeCount}
                    <button onClick={this.handleLike}><span role="img" aria-label="Like"> 👍 </span></button>
                </div>


            </li>
        )
    }
}
export default Messages; 