import React from "react";

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="NewsFeed">
        <h3>News Feed</h3>
        <div className="NewsFeed-Message">Message Card</div>
      </div>
    );
  }
}
export default NewsFeed;
