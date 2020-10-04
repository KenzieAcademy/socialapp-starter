import React from "react";
import {Link} from "react-router-dom"
import { Image, Layout,BackTop} from 'antd';
import "antd/dist/antd.css"
import Menu from "../components/menu/MenuAuthenticated";
import theQuestBoardHeader from '../media/theQuestBoardHeader.png'
import Footer from "../components/footer/Footer";
import { userIsAuthenticated } from "../redux/HOCs"; 

import QuestBoardService from "../components/servicesPage/ServicePage"

import { UpOutlined } from '@ant-design/icons';
import MenuAuthenticated from "../components/menu/MenuAuthenticated";

const questBoardService = new QuestBoardService
const username = questBoardService.getUsername(MenuAuthenticated) 
const loggedInUsername = questBoardService.getUsername()

// comment section 
class Profile extends React.Component {
  constructor (props) {
  super(props) 
    this.state = {
      username: [],
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

        <div className="Profile">
      
    <h2>Welcome, {username} </h2>
        <hr/>
      {/* <Upload
         name="avatar" 
         listType="picture-card" 
         className="avatar-uploader" 
         accept=".png" >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton }
           {/* <Button Icon type="Upload">Upload Profile picture here!</Button> */}
           {/* </Upload> */} */
        </div>
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