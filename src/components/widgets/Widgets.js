import React from "react";
import "../widgets/Widgets.css";

import SearchIcon from "@material-ui/icons/Search";
import CommentBox from "./CommentBox";
import Comments from "./Comments";

class Widgets extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.state = {
      comments: [],
    };
  }

  handleAddComment(comment) {
    this.setState((prevState) => {
      return {
        comments: prevState.comments.concat(comment),
      };
    });
  }

  render() {
    return (
      <div className="widgets">
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder="Search Twitter" type="text" />
        </div>

        <div className="widgets__widgetContainer">
          <h2>What's happening</h2>
        </div>
        <div>
          <p>HII THERE</p>
          <CommentBox handleAddComment={this.handleAddComment} />
          <div className="new">
            <Comments comments={this.state.comments} />
          </div>
        </div>
      </div>
    );
  }
}

export default Widgets;
