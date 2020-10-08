import React from "react";

import { Layout, Avatar } from "antd";
import Title from "antd/lib/typography/Title";

const { Header } = Layout;
class TwitHeader extends React.Component {
  render() {
    return (
      <Header
        style={{
          padding: 100,
          backgroundImage:
            "url(" +
            "https://www.setaswall.com/wp-content/uploads/2017/03/City-Night-Raod-4K-Wallpaper-3840x2160.jpg" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Title style={{ color: "lightblue" }} level={3}>
          <Avatar
            style={{ float: "left", left: "-95px", bottom: "1px" }}
            size={100}
            src="https://cdn.dribbble.com/users/1525393/screenshots/6484130/comp_1.gif"
          />
          {/* <p
            style={{
              color: "lightblue",
              fontFamily: "cursive",
              fontSize: "45px",
            }}
          >
            Twitter
          </p> */}
        </Title>
      </Header>
    );
  }
}

export default TwitHeader;
