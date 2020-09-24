import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MessageFeed from "./pages/MessageFeed";
import NotFound from "./pages/NotFound";
import { Layout, Avatar, Menu, Breadcrumb, Button, message } from "antd";
import Title from "antd/lib/typography/Title";
import SubMenu from "antd/lib/menu/SubMenu";
import { SettingOutlined } from "@ant-design/icons";
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
        <Header style={{ padding: 20, backgroundColor: "dark" }}>
          <Title style={{ color: "lightblue" }} level={3}>
            <Avatar style={{ float: "right" }} size={40} src='https://image.similarpng.com/thumbnail/2020/06/Popular-Logo-Twitter-clipart-PNG.png' />
            <h2 style={{ color: "lightblue" }}>Twitter</h2>
          </Title>
        </Header>
        <Layout>
          <Sider style={{ backgroundColor: "dark" }}>
            <switch>
              <Route
                exact
                path={"/profile/:username"}
                component={Profile}
              />
            </switch>
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
                    <span>User Information</span>
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
                  <Menu.Item key="location1"> Edit Profile</Menu.Item>
                  <Menu.Item key="location2"> Waiting... </Menu.Item>
                  <Button
                  > <SettingOutlined /> Logout</Button>


                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
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
                  backgroundColor: "lightblue", backgroundImage: "url(" + "https://wallpapercave.com/wp/wp2683622.jpg" + ")"
                }}
              >
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
