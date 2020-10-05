import React from "react";

import DataService from "../../DataService";
// const username = JSON.parse(localStorage.getItem("login")).result.username;
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        user: {
          userName: "",
          displayName: "",
          about: "",
        },
      },
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
  getUserInfo() {
    return this.client
      .getUser(this.client.getUser(this.client.getUserName()))
      .then((result) => {
        // this.setState({
        //   data: {
        //     user: {
        //       userName: "",
        //       displayName: "",
        //       about: "",
        //     },
        //   },
        // });
        console.log(result);
      });
  }
  render() {
    return (
      <div>
        <p>
          <strong>About User</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
}

export default About;
