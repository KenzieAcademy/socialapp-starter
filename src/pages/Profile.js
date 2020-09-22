import React from "react";

import {Link} from "react-router-dom"
import {Image, message, Upload, Button, Layout} from 'antd';
import "antd/dist/antd.css"
import Menu from "../components/menu/MenuAuthenticated";
import { userIsAuthenticated } from "../redux/HOCs";
import QuestboardService from "../components/servicesPage/ServicePage"
import Icon from "@ant-design/icons/lib/components/Icon";
import { Route } from "react-router";
import theQuestBoardHeader from '../media/theQuestBoardHeader.png'




class Profile extends React.Component {
  super(props) {
    this.state = {
      username: [],
      picture: "",
    }
    
  }
    
  render() {
    const questboardService = new QuestboardService
    const username = questboardService.getUsername()
    const {  Content, Footer} = Layout;
    return (
      <Layout className="site-layout" style={{ marginLeft: 190 }}>
      <Menu isAuthenticated={this.props.isAuthenticated} />

      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>

        <div className="Profile">
      
    <h2>Welcome, {username} </h2>
        <hr/>
      <Link to="/UpdateProfile">Update your Character Sheet!</Link>
    </div>
    
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