import React, { Component } from "react";
import DataService from "../../dataService";

class GetMessage extends Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
    this.state = {
      data: {},
    };
  }

  getAllMessages() {
    return this.client.getMessages().then((result) => {
      this.setState({
        data: result.data,
      });
      console.log("Hello");
    });
  }
  componentDidMount() {
    this.getAllMessages();
  }
  render() {
    if (this.state.data === {})
      return (
        <div>
          <h1>loading</h1>
        </div>
      );
    return (
      <div>
        <div>
          <h1></h1>
        </div>
        <div id="test"></div>
      </div>
    );
  }
}
export default GetMessage;
