import React from "react";
import DataService from "../../DataService";

class UnlikeButton extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        messageId: 164
      };
  
      this.client = new DataService();
    }

    
  handleUnlike  = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.client.handleUnlike(this.state).then((result) => {
      console.log(result);
      return result
    });
  }

  render() {
    return (
      <div className="Unlike Button">
        <button onClick = {this.handleUnlike}>Unlike</button>
      </div>
    );
  }
}

export default UnlikeButton;
