import React from "react";
import Dataservice from "../../pages/dataService";
import "./deleteacct.css";

import { Modal, Button } from "antd";

class DeleteAcctButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      visible: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.client = new Dataservice();
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleDelete = () => {
    this.client.deleteuser().then((response) => {
      console.log(response);
    });
  };

  render() {
    return (
      <div className="DeleteAcctButton">
        <Button id="del" type="primary" onClick={this.showModal}>
          Delete Account
        </Button>
        <Modal
          id="modal"
          visible={this.state.visible}
          onOk={this.handleDelete}
          onCancel={this.handleCancel}
        >
          <p>R u sure to delete Account</p>
        </Modal>
      </div>
    );
  }
}

export default DeleteAcctButton;
