import React from "react";
import DataService from "../../DataService";
class GetDisplayName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayName: "" };
    this.client = new DataService();
  }

  componentDidMount() {
    this.client.getUser(this.props.username).then((response) => {
      // console.log(response);
      this.setState({ displayName: response.data.user.displayName });
    });
  }
  render() {
    return <span className="displayName">{this.state.displayName}</span>;
  }
}

export default GetDisplayName;
