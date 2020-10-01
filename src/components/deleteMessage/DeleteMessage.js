import React from "react";
import DataService from "../../DataService";

class DeleteMessage extends React.Component {
  constructor(props) {
    super(props);

    this.client = new DataService();
  }

  handleDelete = (e) => {
    e.preventDefault();
    this.client.deleteMessage(this.props.messageId).then((result) => {
      console.log(result.data);
    });
  };

  render() {
    return (
      <button className="DeleteMessage-button" onClick={this.handleDelete}>
        Delete
      </button>
    );
  }
}

export default DeleteMessage;
