import React from "react";
import { Input } from "antd";

class NameInput extends React.Component {
  render() {
    return (
      <div className="NameInput">
        <Input placeholder="User Name" />
      </div>
    );
  }
}

export default NameInput;
