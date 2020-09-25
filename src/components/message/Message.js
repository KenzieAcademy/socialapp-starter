import React from "react";
import DataService from "../../dataService";
//import Axios from "axios"

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
    this.state = {
      data: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  postAMessage = (e) => {
    e.preventDefault();
    console.log(e.target.elements.data.value);
    return this.client.postMessage({
      text: e.target.elements.data.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.postAMessage}>
          <div>
            <label>Post A Message</label> <br />
            <input onChange={this.handleChange} type="text" name="data" />
          </div>
          <div>
            <button>Post</button> <br />
          </div>
        </form>
      </div>
    );
  }
}

export default Message;
