import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageList from "../components/messageList/MessageList";
import { Layout, Affix } from "antd";

const { Content, Footer } = Layout;

class Feed extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <div className="Feed">
          <Affix>
            <Menu isAuthenticated={this.props.isAuthenticated} />
          </Affix>
        </div>

        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
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
