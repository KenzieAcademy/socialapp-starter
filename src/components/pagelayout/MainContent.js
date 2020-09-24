import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import MessageFeed from "../../pages/MessageFeed";
import NotFound from "../../pages/NotFound";

import { Layout, Avatar, Menu, Breadcrumb, Button, message } from "antd";
import EditProfile from "../../pages/EditProfile";

const { Header, Footer, Sider, Content } = Layout;
class MainContent extends React.Component {
  render() {
    return (
      <Layout>
        <Content style={{ padding: "0 35px" }}>
          <Breadcrumb style={{ margin: "10px 0" }}>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              background: "#fff",
              padding: 300,
              minHeight: 700,
              backgroundColor: "lightblue",
              backgroundImage:
                "url(" + "https://wallpapercave.com/wp/wp2683622.jpg" + ")",
            }}
          >
            <switch>
              <Route exact path="/messagefeed" component={MessageFeed} />
              <Route exact path="/" component={Home} />
              <Route exact path="/profile/:username" component={Profile} />
              <Route exact path="/editprofile" component={EditProfile} />
              <Route exact path="*" component={NotFound} />
              {/* <Route exact path="*" component={Button} /> */}
            </switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design Layout Created By Adam Amadi
        </Footer>
      </Layout>
    );
  }
}

export default MainContent;
