import React from "react";
import DataService from "../../DataService";

class addLikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.client = new DataService();
  }
  handleAddLikes = (e) => {
    e.preventDefault();
    this.client.addLikes(this.state).then((result) => {
      console.log(result.data);
    });
  };
  incrementLikes = (e) => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.incrementLikes}>
          Like Button:{this.state.count}
        </button>
      </div>
    );
  }
}

export default addLikes;
