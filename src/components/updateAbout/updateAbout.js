import React from "react";
import { Button, Input } from "antd";
import DataService from "../../DataService";
import "./UpdateAbout.css";
const { TextArea } = Input;

class UpdateAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: "",
      displayAbout: "",
      text: "",
    };
    this.client = new DataService();
  }

  componentDidMount() {
    return this.client.getUser(this.client.getUserName()).then((result) => {
      this.setState({ displayAbout: result.data.user.about });
      console.log(result);
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    let aboutData = {
      about: this.state.text,
    };

    this.client.updateUser(aboutData).then((result) => {
      console.log(result);
      this.setState((latestAbout) => ({
        displayAbout: latestAbout.text,
        text: "",
      }));
    });
  };

  render() {
    return (
      <div>
        <div>
          <div className="aboutMeDiv">
            <p>{this.state.displayAbout}</p>
          </div>
        </div>
        <form id="update-about-form" onSubmit={this.handleUpdate}>
          <TextArea
            style={{ background: "#e6e6ea", marginTop: "20px" }}
            rows={4}
            maxLength={255}
            onPressEnter={this.handleUpdate}
            type="text"
            name="text"
            value={this.state.text}
            placeholder="Tell us about yourself!"
            required
            onChange={this.handleChange}
          />
          <Button htmlType="submit">update about me</Button>
        </form>
      </div>
    );
  }
}

export default UpdateAbout;
