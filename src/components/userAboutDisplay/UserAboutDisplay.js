import React from "react";
import { Container } from "semantic-ui-react";
import "./UserAboutDisplay.css"

class UserAboutDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAboutInfo: this.props.userAboutInfo,
    };
    console.log(this.state.userAboutInfo);
  }

  //Thanks to ob1 and HoldOffHunger from https://stackoverflow.com/questions/37009328/re-render-react-component-when-prop-changes
  componentDidUpdate(prevProps) {
    if (prevProps.userAboutInfo !== this.props.userAboutInfo) {
      this.setState({
        userAboutInfo: this.props.userAboutInfo,
      });
    }
  }

  render() {
    return (
      <div className="UserAboutDisplay">
        <Container id = "userAboutDisplay">{this.state.userAboutInfo}</Container>
      </div>
    );
  }
}

export default UserAboutDisplay;
