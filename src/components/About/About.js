import React from "react";

import DataService from "../../DataService";
// const username = JSON.parse(localStorage.getItem("login")).result.username;
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      displayName: "",
      about: "",
    };
    this.client = new DataService();
  }
  //   userName() {
  //     return this.client.getUser(this.client.getUserName()).then((result) => {
  //       console.log(result);
  //     });
  //   }
  //   componentDidMount() {
  //     // this.getUserInfo();
  //   }
  componentDidMount() {
    return this.client.getUser(this.client.getUserName()).then((result) => {
      this.setState({ about: result.data.user.about });
      console.log(result);
    });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <p>
          <strong>About User</strong>
        </p>
        <p>{this.state.about}</p>
      </div>
    );
  }
}

export default About;
