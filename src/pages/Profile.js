import React from "react";
import { userIsAuthenticated } from "../redux/HOCs";
import Menu from "../components/menu/MenuAuthenticated";
import theQuestBoardHeader from '../media/theQuestBoardHeader.png'
import Footer from "../components/footer/Footer";



import { BackTop, Layout } from 'antd';
import { UpOutlined } from '@ant-design/icons';






// comment section 




class Profile extends React.Component {
  super(props) {
    this.state = {
      user: [],
      picture: "",
    }





  }





  render() {



    const { Header, Content } = Layout;


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
      <Layout>
        <Menu />
        <Layout className="site-layout" style={{ marginLeft: 190 }}>
          <Header className="mainHeader" style={{ padding: 0, textAlign: 'center' }}> <img className="theQuestBoardHeader" src={theQuestBoardHeader} alt="QuestBoard Header" /> </Header>

          <Content>
            vsdfsdfsdfsdfsd
      </Content>
          
        </Layout>
      
{/* <Footer /> */}
</Layout>
    );
  }
}
export default userIsAuthenticated(Profile);


{/* 
 <BackTop>
      <div style={style}>UP</div>
    </BackTop>  */}