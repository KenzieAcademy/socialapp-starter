import React from "react";
import DataService from "../../DataService";
import DeleteMessage from "../deleteMessage/DeleteMessage";
import LikeButton from "../likeButton/LikeButton";

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
