import React from "react";
import DataService from "../../DataService";

class UnlikeButton extends React.Component {
<<<<<<< HEAD
    constructor(props) {
      super(props);
  
      this.state = {
        messageId: 206
      };
  
      this.client = new DataService();
    }

    
  handleUnlike  = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.client.handleUnlike(this.state.messageId).then((result) => {
      console.log(result.data);
      return result
    });
  }
=======
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
      return result;
    });
  };
>>>>>>> 86cd0263138da86a8919eb9949b53698e50d9c8e

  render() {
    return (
      <div className="Unlike Button">
<<<<<<< HEAD
        <button onClick = {this.handleUnlike}>Unlike</button>
=======
        <button onClick={this.handleUnlike}>Unlike</button>
>>>>>>> 86cd0263138da86a8919eb9949b53698e50d9c8e
      </div>
    );
  }
}

export default UnlikeButton;
