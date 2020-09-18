import React from "react";
import LikeButton from "../likeButton/LikeButton";
import { displayName } from "react-spinkit";
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
            <FeedUser>{this.props.username}</FeedUser>
            <FeedDate>
              at {new Date(this.props.createdAt).toDateString()}
            </FeedDate>
          </FeedSummary>
          <FeedExtra text>{this.props.text}</FeedExtra>
          <FeedMeta>
            <FeedLike>
              <Icon name="like" /> {this.props.likes.length} Likes
            </FeedLike>
          </FeedMeta>
        </FeedContent>
      </Feed.Event>
    );
  }
}

export default Message;
