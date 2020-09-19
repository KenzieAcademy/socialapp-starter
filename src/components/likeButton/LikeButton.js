import React from "react";
import DataService from "../../DataService";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
<<<<<<< HEAD
      messageId: 206

=======
      messageId: props.messageId,
>>>>>>> 86cd0263138da86a8919eb9949b53698e50d9c8e
    };

    this.client = new DataService();
  }

  handleLike = (e) => {
    e.preventDefault();
<<<<<<< HEAD
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
=======
    console.log(this.state);
    this.client.handleLike(this.state).then((result) => {
      console.log(result);
      return result;
    });
  };

  render() {
    return (
      <div className="Like Button">
        <button onClick={this.handleLike}>Like</button>
>>>>>>> 86cd0263138da86a8919eb9949b53698e50d9c8e
      </div>
    );
  }
}

export default LikeButton;
