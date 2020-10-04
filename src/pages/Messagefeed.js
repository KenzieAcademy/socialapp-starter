import React, { Component } from "react";
import "../components/menu/Menu.css";
import DataServices from "../dataService";
import MsgNavBar from "../components/msgnavbar/MsgNavBar";
import Comment from "../components/Comments/Comment";
import { userIsAuthenticated } from "../redux/HOCs";

import { Layout } from "antd";

const { Header, Sider, Content, Footer } = Layout;

class Messagefeed extends Component {
  constructor(props) {
    super(props);
    this.client = new DataServices();
    this.state = {
      messages: [],
      data: {},
      submitted: false,
      author: "",
      children: "",
    };
  }

  //Below here, the(function), will reflect a change to the VALUE inside, or of an element
  //onChange attribute should contain this
  componentDidMount = () => {
    this.client.getMessages().then((data) => {
      const list = data.data.messages;
      this.setState({ ...this.state, messages: list }, () =>
        console.log(this.state.messages)
      );
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({
      submitted: true,
    });
  };
  handleChange = (event) => {
    let comment = event.target.value;
    console.log(comment);
    this.setState({ children: comment });
  };

  buttonHandler = (event) => {
    console.log(this.state.messages[0].text);
  };

  render() {
    return (
      <Layout className>
        <MsgNavBar isAuthenticated={this.props.isAuthenticated} />
        <Header>Hello</Header>

        <Layout>
          <Content>
            <div className="Home">
              {this.state.messages.map((msg) => (
                <Comment key={msg.id} {...msg} />
              ))}
            </div>
          </Content>

          <Sider>
            <form>
              <label>Comment Section</label>

              <textarea
                onChange={this.handleChange}
                row="1"
                cols="20"
              ></textarea>
              <button
                onClick={this.buttonHandler}
                id="submitComment"
                type="button"
                value="post"
              >
                Submit
              </button>
            </form>
          </Sider>
        </Layout>
      </Layout>
    );
  }
}

export default userIsAuthenticated(Messagefeed);
