import React from "react";
import { userIsAuthenticated } from "../redux/HOCs";
import Menu from "../components/menu/MenuAuthenticated";
import theQuestBoardHeader from '../media/theQuestBoardHeader.png';
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




    const { Header, Footer, Sider, Content } = Layout;

    // for backtop
    const style = {
      height: 60,
      width: 60,
      lineHeight: '40px',
      borderRadius: 4,
      backgroundColor: '#47170e',
      color: '#e0d8c0',
      textAlign: 'center',
      fontSize:20,
    };

    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />

        
<<<<<<< HEAD
          
            
       
=======
        
        <Layout>
    <MenuUnauthenticated />
    <Layout className="site-layout" style={{ marginLeft: 190 }}>
      <Header className="mainHeader" style={{ padding: 0, textAlign: 'center'}}> <img className="theQuestBoardHeader" src={theQuestBoardHeader} alt="QuestBoard Header" /> </Header>
      <Header className="subHeader" ><h2>Quests will appear here!</h2> </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>

        <div className="Profile">
      <Menu isAuthenticated={this.props.isAuthenticated} />
    <h2>Welcome, {this.username}</h2>
        <hr/>
      <Upload
         name="avatar" listType="picture-card" className="avatar-uploader" 
         accept=".png" >
           <Button Icon type="Upload">Upload Profile picture here!</Button>
           </Upload>

>>>>>>> 9b0f3e4257dc63a5bf2b40ff455fe1f983a9678e
        



        

    
        <Footer />
        <BackTop>
          <div style={style}><UpOutlined /></div>
        </BackTop>
      </div>

    );
  }
}
export default userIsAuthenticated(Profile);