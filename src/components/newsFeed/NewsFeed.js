import React from "react";
import LikeButton from "../likeButton/LikeButton";
import UnikeButton from "../unlikeButton/UnlikeButton";
<<<<<<< HEAD

=======
>>>>>>> 86cd0263138da86a8919eb9949b53698e50d9c8e

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
