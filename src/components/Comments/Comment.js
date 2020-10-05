import React from "react";
import DataService from "../../dataService";
import { LikeOutlined } from "@ant-design/icons";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: props.likes };
    this.client = new DataService();
  }

  handleLike = (e) => {
    const username = this.client.getUsername();
    if (this.state.likes.some((like) => like.username === username)) return;

    this.client.likeComment(this.props.id).then((res) => {
      console.log(res.data);
      this.setState((currentState) => {
        return { likes: [res.data.like, ...currentState.likes] };
      });
    });
  };

  render() {
    return (
      <div className="comment">
        <div>
          <span>
            {this.props.username} posted at {this.props.createdAt}
          </span>
          {this.props.text}
          <span>{this.state.likes.length}</span>
          <button onClick={this.handleLike}>
            Like <LikeOutlined />
          </button>
        </div>
      </div>
    );
  }
}

export default Comment;
