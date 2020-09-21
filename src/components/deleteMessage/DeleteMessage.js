import React from "react";
import Dataservice from "../../pages/dataService";

import "./deletemessage.css";

class DeleteMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: "",
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.client = new Dataservice();
  }
  handleDelete = () => {
    this.client.deleteMessage(this.props.messageId).then((response) => {
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
