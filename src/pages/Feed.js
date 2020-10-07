import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageList from "../components/messageList/MessageList";
import { BackTop, Layout } from "antd";

const style = {
  height: 100,
  width: 150,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#94b1af",
  color: "#060b1b",
  textAlign: "center",
  fontSize: 14,
};

const { Content, Footer } = Layout;

class Feed extends React.Component {
  render() {
    return (
      <Layout style={{ background: "#e6e6ea" }}>
        <div className="Feed">
          <Menu isAuthenticated={this.props.isAuthenticated} />
        </div>

        <Content
          style={{ padding: "0 50px", background: "#060b1b", margin: "0 auto" }}
        >
          <div
            className="site-layout-content"
            style={{ background: "#0a3051" }}
          >
            <MessageList />
          </div>
        </Content>

        <Footer style={{ textAlign: "center", background: "#94b1af" }}>
          Observit ©2020 Created by Team 404
        </Footer>
        <BackTop>
          <div style={style}>Back to top</div>
        </BackTop>
      </Layout>
    );
  }
}

export default userIsAuthenticated(Feed);
