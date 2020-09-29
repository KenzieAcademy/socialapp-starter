import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import CreateMessage from "../../pages/CreateMessage";
import MessageFeed from "../../pages/MessageFeed";
import NotFound from "../../pages/NotFound";

import { Layout, Breadcrumb } from "antd";
import EditProfile from "../../pages/EditProfile";

const { Header, Footer, Sider, Content } = Layout;
class MainContent extends React.Component {
  render() {
    return (
      <Layout>
        <Content style={{ padding: "0 35px" }}>
          <Breadcrumb style={{ margin: "8px 0" }}>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              // background: "#fff",
              padding: 300,
              minHeight: 700,
              borderRadius: "20px",
              MozBackgroundSize: "no-repeat",
              backgroundColor: "lightblue",
              backgroundImage:
                "url(" + "https://i.pinimg.com/originals/81/16/88/811688d44a9906c2b1db6cde2304168b.gif" + ")", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: 'no-repeat'
            }}
          >
            <Switch>
              <Route exact path="/messagefeed" component={MessageFeed} />
              <Route exact path="/" component={Home} />
              <Route exact path="/profile/:username" component={Profile} />
              <Route exact path="/editprofile" component={EditProfile} />
              <Route exact path="/createmessage" component={CreateMessage} />
              <Route exact path="*" component={NotFound} />
              {/* <Route exact path="*" component={Button} /> */}
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center", fontFamily: "Brush Script MT", fontSize: "30px" }}>
          Ant Design Layout Created By Adam Amadi
        </Footer>
      </Layout>
    );
  }
}

export default MainContent;
