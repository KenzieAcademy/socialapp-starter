import React from "react";
import MessageCard from "../messageCard/MessageCard";

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="NewsFeed">
        <h3>News Feed</h3>
        <div className="NewsFeed-Message">
          <MessageCard messageId={148} />
          <MessageCard messageId={150} />
          <MessageCard messageId={151} />
          <MessageCard messageId={152} />
          <MessageCard messageId={153} />
        </div>
        <br />
        <br />
      </div>
    );
  }
}
export default NewsFeed;
