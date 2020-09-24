import React from "react";
import LikeButton from "../likeButton/LikeButton";
import { displayName } from "react-spinkit";
import { Link } from "react-router-dom";
import {
  Feed,
  FeedContent,
  FeedDate,
  FeedExtra,
  FeedLike,
  FeedMeta,
  FeedSummary,
  FeedUser,
  Icon,
} from "semantic-ui-react";
// import UserServices from "../../services/UserDataService";

class Message extends React.Component {
  render() {
    return (
      <Feed.Event>
        <FeedContent>
          <FeedSummary>
              <Link to={`/profile/${this.props.username}`}>
                {this.props.username}
              </Link>
            <FeedDate>
              at {new Date(this.props.createdAt).toDateString()}
            </FeedDate>
          </FeedSummary>
          <FeedExtra text>{this.props.text}</FeedExtra>
          <FeedMeta>
            <FeedLike>
              <LikeButton
                className="likeButton"
                likesArray={this.props.likes}
                messageId={this.props.id}
              />
            </FeedLike>
          </FeedMeta>
        </FeedContent>
      </Feed.Event>
    );
  }
}

export default Message;
