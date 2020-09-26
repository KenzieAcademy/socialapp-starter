import React from "react";

import { Layout, Avatar, Menu, Breadcrumb, Button, message } from "antd";
import Title from "antd/lib/typography/Title";

import Twitter from "../../components/defualtpicture/freeiconlibrary.jpg";

const { Header, Footer, Sider, Content } = Layout;
class TwitHeader extends React.Component {
  render() {
    return (
      <Header style={{ padding: 20, backgroundColor: "dark" }}>
        <Title style={{ color: "lightblue" }} level={3}>
          <Avatar
            style={{ float: "right" }}
            size={40}
            src="https://image.similarpng.com/thumbnail/2020/06/Popular-Logo-Twitter-clipart-PNG.png"
          />
          <h2 style={{ color: "lightblue" }}>Twitter</h2>
        </Title>
      </Header>
    );
  }
}

export default TwitHeader;
