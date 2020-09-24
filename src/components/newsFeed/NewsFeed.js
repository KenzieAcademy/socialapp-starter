import React from "react";
import LikeButton from "../likeButton/LikeButton";
import UnikeButton from "../unlikeButton/UnlikeButton";

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="NewsFeed">
        <h3>News Feed</h3>
        <h3>Message Feed</h3>
      </div>
    );
  }
}
export default NewsFeed;
