import React from "react";
import DataService from "../../services/DataService";
import PostLikeService from "../../services/PostLikeService";
import DeleteLikeService from "../../services/DeleteLikeService";
import { Button, Icon, Label } from "semantic-ui-react";
import "./LikeButton.css"

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      likesArray: this.props.likesArray,
      postRequestData: {
        messageId: this.props.messageId,
      },
      deleteRequestData: {
        likeId: {},
      },
    };
    this.loggedInUser = new DataService().getUsername();
  }

  componentDidMount() {
    let likesArray = this.state.likesArray;
    likesArray.forEach((likeObject) => {
      if (this.loggedInUser === likeObject.username) {
        this.setState({ isLiked: true });
        this.setState({ deleteRequestData: { likeId: likeObject.id } });
      }
    });
  }

  onClick = (event) => {
    if (this.state.isLiked) {
      DeleteLikeService.deleteLike(this.state.deleteRequestData.likeId)
        .then((result) => {
          console.log(result);
          let likesArrayCopy = [...this.state.likesArray];
          likesArrayCopy.forEach((likeObject) => {
            if (this.loggedInUser === likeObject.username) {
              likesArrayCopy.pop(likeObject);
            }
          });
          this.setState({ likesArray: likesArrayCopy });
        })
        .catch((error) => console.log(error));
      this.setState({ isLiked: false });
    } else {
      PostLikeService.postLike(this.state.postRequestData)
        .then((result) => {
          console.log(result);
          let likesArrayCopy = [...this.state.likesArray];
          let likeObject = result.data.like;
          likesArrayCopy.push(likeObject);
          this.setState({ likesArray: likesArrayCopy });
          this.setState({ deleteRequestData: { likeId: likeObject.id } });
        })
        .catch((error) => console.log(error));
      this.setState({ isLiked: true });
    }
  };

  render() {
    if (this.state.isLiked) {
      return (
        <div className="LikeButton">
          <Button as="div" labelPosition="right">
            <Button icon color="green" onClick={this.onClick}>
              <Icon name="like" />
              Like
            </Button>
            <Label basic pointing="left">
              {this.state.likesArray.length}
            </Label>
          </Button>
        </div>
      );
    }

    return (
      <div className="LikeButton">
        <Button as="div" labelPosition="right">
          <Button icon onClick={this.onClick}>
            <Icon name="like" />
            Like
          </Button>
          <Label basic pointing="left">
            {this.state.likesArray.length}
          </Label>
        </Button>
      </div>
    );
  }
}

export default LikeButton;
