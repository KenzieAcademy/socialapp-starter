import React, { Component } from "react";
import Comment from "./Comment";

class CommentList extends Component {
    render() {
        return (
            <div className="commentList" >
                You may call me the CommentList
                <Comment author={this.props.author} children="Just some comments over here, dont mind little old me" />
                <Comment author={"Bruce lee"} children="You must become water...." />
            </div >
        )
    }


};

export default CommentList;