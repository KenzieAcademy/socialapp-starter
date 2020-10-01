import React from "react";
import DataService from "../../DataService";

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
      return result;
    });
  };

  render() {
    return (
      <div className="Like Button">
        <button onClick={this.handleLike}>Like</button>
      </div>
    );
  }
}

export default LikeButton;
