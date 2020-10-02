import React, { createElement } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import { DislikeOutlined, LikeOutlined, LikeFilled } from "@ant-design/icons";
import DeleteMessage from "../deleteMessage/DeleteMessage";
import DataService from "../../pages/dataService";

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: props.likes,
    };
    this.client = new DataService();
  }

  handlelike = (e) => {
    const username = JSON.parse(localStorage.getItem("login")).result.username;
    if (this.state.likes.some((like) => like.username === username)) return;
    e.preventDefault();
    console.log(this.props.messageId);
    this.client.posttlike(this.props.messageId).then((response) => {
      console.log(response.like);
      this.setState((currentstate) => {
        return { likes: [response.like, ...currentstate.likes] };
      });
    });
  };

  render() {
    const username = JSON.parse(localStorage.getItem("login")).result.username;
    return (
      <li className="Message">
        <Comment
          actions={[
            <Tooltip key="comment-basic-like" title="Like">
              <span onClick={this.handlelike}>
                {createElement(
                  this.state.likes.some((like) => like.username === username)
                    ? LikeFilled
                    : LikeOutlined
                )}
                <span className="comment-action">
                  {this.state.likes.length}
                </span>
              </span>
            </Tooltip>,
            <Tooltip key="comment-basic-dislike" title="Dislike">
              <span>
                {React.createElement(DislikeOutlined)}
                <span className="comment-action">{}</span>
              </span>
            </Tooltip>,
            <span key="comment-basic-reply-to">Reply to</span>,
          ]}
          author={this.props.username}
          avatar={<Avatar src="" alt={this.props.username} />}
          content={
            <div className="message-text">
              {this.props.text}
              <DeleteMessage messageId={this.props.messageId} />
            </div>
          }
          datetime={
            <Tooltip
              title={moment(this.props.createdAt).format("YYYY-MM-DD HH:mm:ss")}
            >
              <span>{moment(this.props.createdAt).fromNow()}</span>
            </Tooltip>
          }
        />
      </li>
    );
  }
}

export default Message;
