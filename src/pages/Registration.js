import React from "react";
import { Layout } from 'antd';
import RegistrationForm from "../components/RegistrationForm/RegistrationForm"
import MenuUnauthenticated from "../components/menu/MenuAuthenticated";
import { userIsNotAuthenticated } from "../redux/HOCs";
import theQuestBoardHeader from '../media/theQuestBoardHeader.png'

class Registration extends React.Component {

  render() {
    const { Header, Content, Footer } = Layout;

    return (
    <Layout>
    <MenuUnauthenticated />
    <Layout className="site-layout" style={{ marginLeft: 190 }}>
      <Header className="mainHeader" style={{ padding: 0, textAlign: 'center'}}> <img className="theQuestBoardHeader" src={theQuestBoardHeader} alt="QuestBoard Header" /> </Header>
      <Header className="subHeader" ><h2>Quests will appear here!</h2> </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
      
        <RegistrationForm />
      
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
    );
  }
}

export default userIsNotAuthenticated(Registration);
