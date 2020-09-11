import React from "react";
import LikeButton from "../likebutton";

class LikeButton extends React.Component {
  render() {
    return (
      <div className="LikeButton">
        <button>&#128077 Like</button>
      </div>
    );
  }
}

export default LikeButton;
