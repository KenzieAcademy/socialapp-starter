import React from "react";
import { userIsAuthenticated } from "../redux/HOCs";
import MenuUnauthenticated from "../components/menu/MenuUnauthenticated";
import theQuestBoardHeader from '../media/theQuestBoardHeader.png'

 

import { Layout,Menu, BackTop ,Header,Sider,Content, Footer} from 'antd';
import {UpOutlined } from '@ant-design/icons';

  
  


// comment section 



class Profile extends React.Component {
  super(props) {
    // this.state = {
    //   user: [],
    //   picture: "",
    // }





  }





  render() {
   
    const { Header, Content, Footer, Sider } = Layout;
    
   


// for backtop
const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

    return (
      <div className="Profile" style={{ height: '600vh', padding: 8 }}>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        
        
        <Layout>
    <MenuUnauthenticated />
    <Layout className="site-layout" style={{ marginLeft: 190 }}>
      <Header className="mainHeader" style={{ padding: 0, textAlign: 'center'}}> <img className="theQuestBoardHeader" src={theQuestBoardHeader} alt="QuestBoard Header" /> </Header>
      <Header className="subHeader" ><h2>Quests will appear here!</h2> </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
       
      
        
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
       

        <BackTop>
      <div style={style}><UpOutlined /></div>
    </BackTop>


   

      </div>
    );
  }
}
export default userIsAuthenticated(Profile);
