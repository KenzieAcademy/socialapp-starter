import React, { Component } from "react";
import DataService from "../../dataService";

class GetMessage extends Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
    this.state = {
      data: 0,
    };
  }

  getAllMessages() {
    console.log(this.state.data);
    return this.client.getMessages().then((result) => {
      this.setState({
        data: result,
      });
    });
  }
  forMessages(item) {
    document.getElementById("test").innerHTML +=
      "Username says " + item.text + "<br>";
  }
  componentDidMount() {
    this.getAllMessages();
  }

  render() {
    console.log(this.state.data);

    if (this.state.data === 0)
      return (
        <div>
          <h1>loading</h1>
        </div>
      );
    return (
      <div>
        <div>
          <h1>Messages</h1>
        </div>
        <div id="test"></div>
      </div>
    );
  }
}
export default GetMessage;
