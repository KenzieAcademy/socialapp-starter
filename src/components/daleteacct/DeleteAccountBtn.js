import React from "react";
import "./DeleteAcct";

import { Button } from "antd";

class DeleteAcct extends React.Component {
  render() {
    return (
      <div className="DeleteAccountButton">
        <Button id="log" type="primary">
          Delete Account
        </Button>
      </div>
    );
  }
}

export default DeleteAcct;
