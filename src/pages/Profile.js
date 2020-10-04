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

// const questboardService = new QuestboardService
// const username = questboardService.getUsername()
// const loggedInUsername = questboardService.getUsername()



class Profile extends React.Component {
  constructor (props) {
  super(props) 
    this.state = {
      username: [],
      picture: "",
    }
    const questboardService = new QuestboardService
    const username = questboardService.getUsername()
  }
    
  render() {
    const {  Content, Footer} = Layout;
    return (
      <Layout className="site-layout" style={{ marginLeft: 190 }}>
      <Menu isAuthenticated={this.props.isAuthenticated} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        <div className="Profile">
      
    <h2>Welcome, {this.username} </h2>
        <hr/>
      <Link to="/UpdateProfile">Update your Character Sheet!</Link>
    </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    
   
    );
  }
}
export default userIsAuthenticated(Profile);


