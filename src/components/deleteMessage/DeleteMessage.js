import React from "react";
import Dataservice from "../../pages/dataService";

class DeleteMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.client = new Dataservice();
  }
  handleDelete = () => {
    this.client.deletemessage().then((response) => {
      console.log(response);
    });
  };
  render() {
    return (
      <div className="DeleteMessage">
        <button id="messagedel" onClick={this.handleDelete}>
          Delete Message
        </button>
      </div>
    );
  }
}

export default DeleteMessage;
