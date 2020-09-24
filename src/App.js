import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MessageFeed from "./pages/MessageFeed";
import NotFound from "./pages/NotFound";

import { Layout, Avatar, Menu, Breadcrumb, Button, message } from "antd";
import Title from "antd/lib/typography/Title";
import SubMenu from "antd/lib/menu/SubMenu";
import Icon from "@ant-design/icons";
import TwitHeader from "./components/pagelayout/Header";
import SideBar from "./components/pagelayout/SideBar";
import EditProfile from "./pages/EditProfile";

const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TwitHeader />
        <Layout>
          <SideBar />
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{
                  background: "#fff",
                  padding: 300,
                  minHeight: 700,
                  backgroundColor: "lightblue",
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
        </Layout>
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile/:username" component={Profile} />
          <Route exact path="*" component={NotFound} />
          <Route exact path="*" component={Button} />
          <Route exact path="/profile/:username" component={MessageFeed} />
        </Switch> */}
      </div>
    );
  }
}

export default App;
