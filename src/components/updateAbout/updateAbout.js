import React from "react";

import DataService from "../../DataService";

class UpdateAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: "",
    };
    this.client = new DataService();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    this.client.updateUser(this.state).then((result) => {
      console.log(result);
      this.setState({
        about: result.data.about,
      });
    });
  };
  render() {
    // console.log(data.user);
    return (
      <form id="udate-about-form" onSubmit={this.handleUpdate}>
        <label htmlFor="about">About</label>
        <input type="text" name="about" required onChange={this.handleChange} />
        <button>update about me</button>
      </form>
    );
  }
}

export default UpdateAbout;
