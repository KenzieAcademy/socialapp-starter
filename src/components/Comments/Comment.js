import React from "react";

function Comment(props) {
    return (
        <div className="comment">
            <div className="authorComment">
                {props.author}
            </div>
        </div>
    )
}


export default Comment;