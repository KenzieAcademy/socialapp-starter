import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import Icon from '@ant-design/icons';


const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Header style={{ padding: 10 }}>
          <Avatar style={{ float: 'right' }} src='.Twitter.png' />
          <Title style={{ color: 'lightblue' }} level={3}>Twitter</Title>
        </Header>
        <Layout>
          <Sider>
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
                Dashboard
      </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>Private Infor</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS' title='About Me'>
                  <Menu.Item key='location1'> Home Address</Menu.Item>
                  <Menu.Item key='location2'> Office Address</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 300, minHeight: 700, backgroundColor: "lightblue" }}></div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design Layout  Created By Adam Amadi</Footer>
          </Layout>
        </Layout>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            exact
            path="/profile/:username"
            component={Profile}
          />
          <Route
            exact
            path="*"
            component={NotFound}
          />
          <Route
            exact
            path="*"
            component={Button}
          />

        </Switch>
      </div>
    );
  }
}

export default App;
