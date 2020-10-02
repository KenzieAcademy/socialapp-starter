import React from "react";
import { Link } from "react-router-dom";
import notFound from '../media/404.png'
import { Layout, Button } from "antd";
import MenuUnauthenticated from "../components/menu/MenuUnauthenticated";
import theQuestBoardHeader from '../media/theQuestBoardHeader.png'
import mimic from '../media/mimic.png'

class NotFound extends React.Component {
  render() {
    const { Header, Content, Footer } = Layout;
    return (
      <Layout>
    <MenuUnauthenticated />
    <Layout className="site-layout" style={{ marginLeft: 190 }}>
      <Header className="mainHeader" style={{ padding: 0, textAlign: 'center'}}> <img className="theQuestBoardHeader" src={theQuestBoardHeader} alt="QuestBoard Header" /> </Header>
      <Header className="subHeader" ><h2>A Mimic ate your page! " {this.props.location.pathname} " is not found.</h2> <img src={mimic} alt="mimic"/> </Header>
      <Content style={{ margin: '24px auto auto', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
      <div className="NotFound">
        <img src={notFound} alt="404NotFound"/>
        <p></p>
        <Button><Link to="/">Go Home</Link></Button>
      </div>
      </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
    )
  }
}

export default NotFound;
