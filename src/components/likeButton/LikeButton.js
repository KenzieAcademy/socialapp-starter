import React from "react";
import DataService from "../../DataService";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Like/Unlike Buttons">
        <button>Like</button>
        <button>Unlike</button>
      </div>
    );
  }
}

export default LikeButton;
