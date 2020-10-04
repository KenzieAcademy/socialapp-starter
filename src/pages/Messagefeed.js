import React, { Component } from "react";
import "../components/menu/Menu.css";
import DataServices from "../dataService";
import MsgNavBar from "../components/msgnavbar/MsgNavBar";
import Comment from "../components/Comments/Comment";
//import Post from "../components/Post/Post";
import "./Messagefeed.css";

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
    this.setState(
      {
        submitted: true,
      } /*() => {
            if (this.state.submitted) {
                return this.state.messages.shift(...this.state.author)
            }

        }*/
    );
  };

  authorChangehandler = (event) => {
    let authorName = event.target.value;
    this.setState({ author: authorName });
  };

  childrenChangehandler = (event) => {
    let childrenText = event.target.value;
    this.setState({ children: childrenText });
  };

  buttonHandler = (event) => {
    //console.log(this.state.messages[0].text)
    console.log(this.state.author);
  };

  render() {
    return (
      <Layout className>
        <MsgNavBar isAuthenticated={this.props.isAuthenticated} />
        <Header>
          <div className="Header"></div>
        </Header>

        <Layout>
          <Content>
            <div className="Home">
              {this.state.messages.map((msg) => (
                <Comment key={msg.id} {...msg} />
              ))}
            </div>
          </Content>

          <Sider>
            <div className="container">
              <form onSubmit={this.submitHandler}>
                <span>
                  <label>Post Fury Comments</label>
                </span>
                <div>
                  <input
                    onChange={this.authorChangehandler}
                    className="author"
                    placeholder="Your name"
                    type="text"
                    name="author"
                    value={this.state.author}
                  />
                </div>

                <div>
                  <textarea
                    onChange={this.childrenChangehandler}
                    placeholder="Post your thoughts"
                    row="1"
                    cols="16"
                    name="children"
                    value={this.state.children}
                  ></textarea>
                </div>

                <button
                  onClick={this.buttonHandler}
                  id="submitComment"
                  type="button"
                >
                  Submit
                </button>
              </form>
            </div>

            <span>
              {this.state.author} {this.state.children}
            </span>
          </Sider>
        </Layout>

        <Footer>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </Footer>
      </Layout>
    );
  }
}

export default userIsAuthenticated(Messagefeed);
