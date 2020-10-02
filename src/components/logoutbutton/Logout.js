import React from "react";
import "./logout.css";

import { Button } from "antd";

class Logout extends React.Component {
  render() {
    return (
      <div className="LogoutButton">
        <Button id="log" type="primary">
          Logout
        </Button>
      </div>
    );
  }
}

export default Logout;
