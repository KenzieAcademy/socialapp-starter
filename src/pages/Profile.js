import React from "react";

import {Link} from "react-router-dom"
import {Image, message, Upload, Button, Layout} from 'antd';
import "antd/dist/antd.css"
import Menu from "../components/menu/MenuAuthenticated";
import { userIsAuthenticated } from "../redux/HOCs";

import theQuestBoardHeader from '../media/theQuestBoardHeader.png'
import Footer from "../components/footer/Footer";

import { BackTop, TimePicker } from 'antd';
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
      <div className="container">
        <Menu isAuthenticated={this.props.isAuthenticated} />
      
    <Layout className="site-layout" style={{ marginLeft: 190 }}>
      <Header className="mainHeader" style={{ padding: 0, textAlign: 'center'}}> <img className="theQuestBoardHeader" src={theQuestBoardHeader} alt="QuestBoard Header" /> </Header>
      <Header className="subHeader" ><h2>Quests will appear here!</h2> </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>

        <div className="Profile">
      
    {/* <h2>Welcome, {username} </h2> */}
        <hr/>
      <Upload
         name="avatar" 
         listType="picture-card" 
         className="avatar-uploader" 
         accept=".png" >
{/* {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton } */}
           {/* <Button Icon type="Upload">Upload Profile picture here!</Button> */}
           </Upload>

        
        </div>
        </div>
      </Content>
      <Footer className="footer" style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>

       
      
        
        <Footer className="foot"/>
      
  
    

    
        
         
      <BackTop>
      <div style={style}>UP</div>
    </BackTop>
        
      </div>

    );
  }
}
export default userIsAuthenticated(Profile);