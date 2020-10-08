import React from "react";
import DataService from "../../DataService";
import { LikeOutlined } from "@ant-design/icons";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageId: props.messageId,
    };

    this.client = new DataService();
  }

  handleLike = (e) => {
    e.preventDefault();
    console.log(this.state.messageId);
    this.client.handleLike(this.state).then((result) => {
      console.log(result);
      this.props.handleLikeStatus(result.data.like.id);
    });
  };

  render() {
    return (
      <div className="Like Button">
        <button onClick={this.handleLike}>
          Like <LikeOutlined />
        </button>
      </div>
    );
  }
}

export default LikeButton;