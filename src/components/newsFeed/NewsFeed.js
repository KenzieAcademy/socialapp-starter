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
        <div className="NewsFeed-Message">
          <div>Message: </div>
          <div>Some message</div>
          <div> Posted By:</div>
          <div> User DisplayName</div>
          <LikeButton/>
          <UnikeButton />
          <div>Message: </div>
          <div>Some message</div>
          <div> Posted By:</div>
          <div> User DisplayName</div>
          <LikeButton/>
          <UnikeButton />
          <div>Message: </div>
          <div>Some message</div>
          <div> Posted By:</div>
          <div> User DisplayName</div>
          <LikeButton/>
          <UnikeButton />
        </div>
        <br />
        <br />
      </div>
    );
  }
}
export default NewsFeed;
