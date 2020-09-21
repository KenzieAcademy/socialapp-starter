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
    this.client.postMessages({ text: this.state.message }).then(result => {
      alert(result.data)
    });
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
            autoFocus
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
