import React from "react";
import DataService from "../../DataService";

class DeleteMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button className="DeleteMessage-button">Delete</button>;
  }
}

export default DeleteMessage;
