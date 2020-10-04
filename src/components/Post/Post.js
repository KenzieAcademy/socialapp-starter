import React from "react";

function Post(props) {

    return (
        <div className="comment">
            <div>
                <span>
                    {this.state.post.author} posted at {props.createdAt}


                </span>
                {this.state.children}
                <span>{props.likes.length}</span>
            </div>
        </div>
    )
}



export default Post;