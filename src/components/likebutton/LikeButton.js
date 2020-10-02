import React from "react";
import "./likebutton.css";
import Dataservice from "../../pages/dataService";
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageID: 0,
      likeCount: 0,
      like: [],
    };

    this.client = new Dataservice();
  }
  handlelike = () => {
    this.client.posttlike().then((response) => {
      console.log(response);
    });
  };

  incrementMe = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  };
  render() {
    return (
      <div className="LikeButton">
        <button id="like" onClick={this.handlelike}>
          Like : {this.incrementMe}
        </button>
      </div>
    );
  }
}

export default LikeButton;
