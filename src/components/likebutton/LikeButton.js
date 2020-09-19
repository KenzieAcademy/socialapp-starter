import React from "react";
import "./likebutton.css";
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageID: 0,
      count: 0,
    };
  }

  incrementMe = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  };
  render() {
    return (
      <div className="LikeButton">
        <button id="like" onClick={this.incrementMe}>
          Like {this.state.count}
        </button>
      </div>
    );
  }
}

export default LikeButton;
