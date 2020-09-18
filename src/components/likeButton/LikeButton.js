import React from "react";
import DataService from "../../DataService";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageId: 206

    };

    this.client = new DataService();
  }

  handleLike = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.client.handleLike(this.state).then((result) => {
      console.log(result)
      return result
    });
  };

  // handleUnlike  = (e) => {
  //   e.preventDefault();
  //   console.log(this.state)
  //   this.client.handleUnlike(this.state).then((result) => {
  //     console.log(result.data);
  //   });
  // };

  render() {
    return (
      <div className="Like Button">
        <button onClick = {this.handleLike}>Like</button>
      </div>
    );
  }
}

export default LikeButton;
