import React from "react";

import { Layout, Avatar } from "antd";
import Title from "antd/lib/typography/Title";

const { Header, Footer, Sider, Content } = Layout;
class TwitHeader extends React.Component {
  render() {
    return (
      <Header style={{ padding: 13, backgroundColor: "dark" }}>
        <Title style={{ color: "lightblue" }} level={3}>
          <Avatar
            style={{ float: "right" }}
            size={48}
            src="https://cdn.dribbble.com/users/1525393/screenshots/6484130/comp_1.gif"
          />
          <p
            style={{
              color: "lightblue",
              fontFamily: "Brush Script MT",
              fontSize: "45px",
            }}
          >
            Twitter
          </p>
        </Title>
      </Header>
    );
  }
}

export default TwitHeader;
