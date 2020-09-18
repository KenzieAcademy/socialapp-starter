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

const { Header, Footer, Sider, Content } = Layout;

let currentpagepath = "";
let currentpagecomponent;
class App extends React.Component {
  render() {
    if ((currentpagepath = "/MessageFeed")) {
      currentpagecomponent = MessageFeed;
    } else {
      currentpagepath = "/profile/:username";
      currentpagecomponent = Profile;
    }
    return (
      <div className="App">
        <Header style={{ padding: 10 }}>
          <Avatar style={{ float: "right" }} src=".Twitter.png" />
          <Title style={{ color: "lightblue" }} level={3}>
            Twitter
          </Title>
        </Header>
        <Layout>
          <Sider>
            <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
              <Menu.Item key="Dashboard">
                <Button
                  className="ProfileDash"
                  onClick={(currentpagepath = "/profile/:username")}
                >
                  {" "}
                  Profile Dashboard{" "}
                </Button>
              </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>User</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="AboutUS" title="About Me">
                  <Menu.Item key="location1">
                    <Button
                      className="MessageFeed"
                      onClick={(currentpagepath = "/MessageFeed")}
                    >
                      Message Feed
                    </Button>
                  </Menu.Item>
                  <Menu.Item key="location2"> Edit Profile</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
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
                  <Route
                    exact
                    path={"/profile/:username"}
                    component={Profile}
                  />
                </switch>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design Layout Created By Adam Amadi
            </Footer>
          </Layout>
        </Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/profile/:username" component={Profile} />} */}
          {/* <Route exact path="*" component={NotFound} /> */}
          {/* <Route exact path="*" component={Button} /> */}
          <Route exact path="/profile/:username" component={MessageFeed} />
        </Switch>
      </div>
    );
  }
}

export default App;
