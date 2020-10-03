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
import TwitHeader from "./components/pagelayout/Header";
import SideBar from "./components/pagelayout/SideBar";
import MainContent from "./components/pagelayout/MainContent";
import UseWindowSize from "./UseWindowSize";

const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UseWindowSize />
        <TwitHeader />
        <Layout>

          <SideBar />
          <MainContent />
        </Layout>
      </div>
    );
  }
}

export default App;
