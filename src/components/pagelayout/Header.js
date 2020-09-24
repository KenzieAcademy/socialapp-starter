import React from "react";

import { Layout, Avatar, Menu, Breadcrumb, Button, message } from "antd";
import Title from "antd/lib/typography/Title";

import Twitter from "../../components/defualtpicture/freeiconlibrary.jpg";

const { Header, Footer, Sider, Content } = Layout;
class TwitHeader extends React.Component {
  render() {
    return (
      <Header style={{ padding: 10 }}>
        <Avatar style={{ float: "right" }} src={Twitter} />
        <Title style={{ color: "lightblue" }} level={3}>
          Twitter
        </Title>
      </Header>
    );
  }
}

export default TwitHeader;
