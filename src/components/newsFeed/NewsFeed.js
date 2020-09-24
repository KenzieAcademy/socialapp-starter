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
<<<<<<< HEAD
        <h3>Message Feed</h3>
=======
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
>>>>>>> 91a5723c8dccbe3e13c76f82bd24a4e15ab16b5e
      </div>
    );
  }
}
export default NewsFeed;
