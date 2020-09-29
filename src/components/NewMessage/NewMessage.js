import React from "react";
import Spinner from "react-spinkit";
import "./NewMessage.css";
import DataService from "../../DataService"
import { Input } from 'antd';
import { withAsyncAction } from "../../redux/HOCs";

class NewMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ""
    };
    this.client = new DataService()
  }

  handleMessage = e => {
    e.preventDefault();
    if (this.state.message.length < 256) {
      this.client.postMessages({ text: this.state.message }).then(result => {
        alert(result.data)
      });
    } else {
      alert("Your message is too long, please limit to 255 characters.")
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };



  render() {
    const { loading, error } = this.props;
    return (
      <div className="NewMessage">
        <h2>New Message</h2>
        <form id="new-message" onSubmit={this.handleMessage}>
          <Input.TextArea
            maxLength={255}
            name="message"
            required
            onChange={this.handleChange}
          />

          <button type="submit" disabled={loading}>
            Submit
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default NewMessage;
