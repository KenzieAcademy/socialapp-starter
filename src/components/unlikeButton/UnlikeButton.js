import React from "react";
import DataService from "../../DataService";

class UnlikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likeId: props.likeId,
    };

    this.client = new DataService();
  }

  handleUnlike = (e) => {
    e.preventDefault();
    console.log(this.state.likeId + ": this show be the id of the like");
    this.client.handleUnlike(this.state.likeId).then((result) => {
      console.log(result.data);
      this.props.handleLikeStatus(0);
    });
  };

  render() {
    return (
      <div className="Unlike Button">
        <button onClick={this.handleUnlike}>Unlike</button>
      </div>
    );
  }
}

export default UnlikeButton;
