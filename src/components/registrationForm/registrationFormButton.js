import { Modal, Button } from "antd";
import React from "react";
import RegistrationForm from "./registrationForm";
import DataService from "../../DataService";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      username: "",
      password: "",
      displayName: "",
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
            <RegistrationForm onOk={this.state.onSubmit} />
          </div>
        </Modal>
      </>
    );
  }
}
export default App;
