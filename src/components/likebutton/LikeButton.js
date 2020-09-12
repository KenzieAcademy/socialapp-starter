import React from "react";
import "./likebutton.css";
class LikeButton extends React.Component {
  render() {
    return (
      <div className="LikeButton">
        <button id="like">Like</button>
      </div>
    );
  }
}

export default LikeButton;
