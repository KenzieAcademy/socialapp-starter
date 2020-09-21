import React from "react";

function Comment(props) {
    return (
        <div className="comment">
            <span className="author">{props.author}</span>
            {props.children}
        </div>
    )
}


export default Comment;