import React from "react";

import { Button } from "antd";

class LogoutButton extends React.Component {
  render() {
    return (
      <div className="LogoutButton">
        <Button type="primary">Logout</Button>
      </div>
    );
  }
}

export default LogoutButton;
