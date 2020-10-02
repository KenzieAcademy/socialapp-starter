import { Modal, Button } from "antd";
import React from "react";
import RegistrationForm from "./registrationForm";
import { withAsyncAction } from "../../redux/HOCs";
import DataService from "../../DataService";

class RegistrationButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      displayName: "",
      visible: false,
    };
    this.client = new DataService();
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
    e.preventDefault();
    this.client.registerUser(this.state).then((result) => {
      console.log(result.data);
      this.props.login(this.state);
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Register New User
        </Button>
        <Modal
          title="Registration Form"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              autoFocus
              required
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="displayName">Display Name</label>
            <input
              type="text"
              name="displayName"
              required
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={this.handleChange}
            />
          </div>
        </Modal>
      </>
    );
  }
}
// export default App;
export default withAsyncAction("auth", "login")(RegistrationButton);
