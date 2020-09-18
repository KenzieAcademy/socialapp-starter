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
        <div className="NewsFeed-Message">
          <div>Message: </div>
          <div>Some message</div>
          <div> Posted By:</div>
          <div> User DisplayName</div>
          <div>Message: </div>
          <div>Some message</div>
          <div> Posted By:</div>
          <div> User DisplayName</div>
          <div>Message: </div>
          <div>Some message</div>
          <div> Posted By:</div>
          <div> User DisplayName</div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
export default NewsFeed;
