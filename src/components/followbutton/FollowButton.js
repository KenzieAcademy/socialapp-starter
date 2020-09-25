import React from "react";
import { Button } from "antd";
class FollowButton extends React.Component {
  state = {
    color: "white",
  };
  onChange = () => {
    this.setState({ color: "green" });
  };
  render() {
    return (
      <Button
        style={{ backgroundColor: this.state.color }}
        onClick={this.onChange}
        type="primary"
      >
        Follow
      </Button>
    );
  }
}
export default FollowButton;
