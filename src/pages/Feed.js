import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageList from "../components/messageList/MessageList";
import { Layout, Affix } from "antd";

const { Content, Footer } = Layout;

class Feed extends React.Component {
  render() {
    return (
      <Layout>
        <div className="Feed">
          <Affix>
            <Menu isAuthenticated={this.props.isAuthenticated} />
          </Affix>
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
      </Layout>
    );
  }
}

export default userIsAuthenticated(Feed);
