import React from "react";
import { Link } from "react-router-dom";
import notFound from '../media/404.png'
import { Layout, Button } from "antd";
import MenuUnauthenticated from "../components/menu/MenuUnauthenticated";
import theQuestBoardHeader from '../media/theQuestBoardHeader.png'
import mimic from '../media/mimic.png'
import Foot from "../components/foot/Foot";


class NotFound extends React.Component {
  render() {
    const { Header, Content } = Layout;
    return (

      <div className="container">

        <MenuUnauthenticated />
        <Layout className="site-layout">
          <Header className="mainHeader" style={{ padding: 0, textAlign: 'center' }}> <img className="theQuestBoardHeader" src={theQuestBoardHeader} alt="QuestBoard Header" /> </Header>
          <Content style={{ width: '100%', overflow: 'initial' }} >
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
              <div className="NotFound">
                <h2>A Mimic ate your page! " {this.props.location.pathname} " is not found.</h2> <img src={mimic} alt="mimic" />
                <img src={notFound} alt="404NotFound" />
                <p></p>
                <Button><Link to="/">Go Home</Link></Button>
              </div>
            </div>
          </Content>
          <Foot />
        </Layout>
      </div>
    )
  }
}

export default NotFound;
