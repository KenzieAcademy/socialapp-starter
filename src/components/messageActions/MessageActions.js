import React, { createElement, useState } from "react";
import { Comment, Tooltip, Avatar } from "antd";

import LikeButton from "../likeButton/LikeButton";

class MessageActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Tooltip key="comment-basic-like" title="Like">
        <span onClick={this.props.handleLikeStatus}>
          <LikeButton />
          <span className="comment-action">{this.props.likeAmount}</span>
        </span>
      </Tooltip>
    );
  }
}

export default MessageActions;
