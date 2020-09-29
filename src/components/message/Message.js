import React from 'react';
import SocialAppService from '../../socialAppService';

class Message extends React.Component {
    state = { likeCount: this.props.likes.length }
    client = new SocialAppService()

    handleLike = () => {
        const loggedInUsername = this.client.getUsername();
        const userHasLiked = this.props.likes.some(
            (likeObject) => likeObject.username === loggedInUsername
        )
        if (userHasLiked) return;

        this.client.postLike(this.props.id).then((like) => {
            this.setState((latestState) => ({
                likeCount: latestState.likeCount + 1,
            }));
        });
    };
    handleDeleteLike = () => {
        const loggedInUsername = this.client.getUsername();
        const userHasLiked = this.props.likes.some(
            (likeObject) => likeObject.username === loggedInUsername
        )
        if (userHasLiked) return;

        this.client.deleteLike(this.props.id).then((response) => {
            if (response.data.statusCode !== 200) return;

            this.setState((latestState) => ({
                likeCount: latestState.likeCount - 1,
            }));
        });
    };

    render() {
        return (

            <li className="message">
                At {this.props.createdAt},
                {this.props.username}
        posted
                <div>
                    {this.props.text}

                    <div className="like-count">Likes: {this.state.likeCount}</div>
                    <button onClick={this.handleLike}>
                        <span role="img" aria-label="like">
                            👍</span>
                    </button>
                    {/* <br /> */}
                    <button onClick={this.handleDeleteLike}>
                        <span role="img" aria-label="like">
                            👎 </span>
                    </button>
                </div>

            </li>
        )
    }
}

export default Message