import React from "react";

import { Layout, Avatar } from "antd";
import Title from "antd/lib/typography/Title";

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
          <p style={{ color: "lightblue" }}>Twitter</p>
          {/* <p style={{ color: "lightblue" size : 14}}>Twitter</p> */}
        </Title>
      </Header>
    );
  }
}

export default TwitHeader;
