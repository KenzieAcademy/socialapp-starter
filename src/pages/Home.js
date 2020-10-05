import React from "react";
import { Layout } from 'antd';
import LoginForm from "../components/loginForm/LoginForm";
import MenuUnauthenticated from "../components/menu/MenuUnauthenticated";
import { userIsNotAuthenticated } from "../redux/HOCs";
import theQuestBoardHeader from '../media/theQuestBoardHeader.png'
import Foot from "../components/foot/Foot";


class Home extends React.Component {
  render() {
    const { Header, Content } = Layout;
    return (
      <div className="container">
        <MenuUnauthenticated />
        <Layout className="site-layout">
          <Header className="mainHeader" style={{ padding: 0, textAlign: 'center' }}> <img className="theQuestBoardHeader" src={theQuestBoardHeader} alt="QuestBoard Header" /> </Header>
          <Content style={{ width: '100%', overflow: 'initial' }} >
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
              <h1>Roll for Initiative</h1>
              <LoginForm />
              <hr />

            </div>
          </Content>
          <Foot />
        </Layout>
      </div>
    );
  }
}


export default userIsNotAuthenticated(Home);
