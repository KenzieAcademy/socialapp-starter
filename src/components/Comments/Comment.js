import React from "react";

function Comment(props) {

    return (
        <div className="comment">
            <div>
                <span>
                    {props.username} posted at {props.createdAt}


                </span>
                {props.text}
                <span>{props.likes.length}</span>
            </div>
        </div>
    )
}


export default Comment;