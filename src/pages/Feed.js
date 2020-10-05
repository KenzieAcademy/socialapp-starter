import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageList from "../components/messageList/MessageList";
import { BackTop, Layout } from "antd";

const style = {
  height: 100,
  width: 80,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#e6e6ea",
  color: "#060b1b",
  textAlign: "center",
  fontSize: 14,
};

const { Content, Footer } = Layout;

class Feed extends React.Component {
  render() {
    return (
      <Layout>
        <div className="Feed">
          <Menu isAuthenticated={this.props.isAuthenticated} />
        </div>

        <Content style={{ padding: "0 50px", background: "#060b1b" }}>
          <div
            className="site-layout-content"
            style={{ background: "#0a3051" }}
          >
            <MessageList />
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
        <BackTop>
          <div style={style}>Back to top</div>
        </BackTop>
      </Layout>
    );
  }
}

export default userIsAuthenticated(Feed);
