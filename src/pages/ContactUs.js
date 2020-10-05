import React from "react";
import MenuUnauthenticated from "../components/menu/MenuUnauthenticated";
import { Layout } from 'antd';
import theQuestBoardHeader from '../media/theQuestBoardHeader.png'
import Foot from "../components/foot/Foot";
import zach01 from '../media/zachcollage.png'


class ContactUs extends React.Component {
  render() {

    const { Header, Content } = Layout;

    return (
      <div className="container">
        <Layout className="site-layout">
          <MenuUnauthenticated />
          <Header className="mainHeader" style={{ padding: 0, textAlign: 'center' }}> <img className="theQuestBoardHeader" src={theQuestBoardHeader} alt="QuestBoard Header" /> </Header>
          <Content style={{ width: '100%', overflow: 'initial' }} >
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
              <img className="zach" src={zach01} alt="zach" />
            </div>
          </Content>
          <Foot />

        </Layout>
      </div>
    );
  }
}

export default ContactUs;
