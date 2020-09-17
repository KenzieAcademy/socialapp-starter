import React from "react";
import DataService from "../../DataService";

class CreateMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button className="CreateMessage-button">Create Message</button>;
  }
}

export default CreateMessage;
