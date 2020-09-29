import React from "react";
import {message, Upload,  Layout,} from 'antd';
import "antd/dist/antd.css"
import FileUploader from "../components/UpdatePicture/UpdatePicture"
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons'
import Menu from "../components/menu/MenuAuthenticated";
import QuestboardService from "../components/servicesPage/ServicePage"
import { userIsAuthenticated } from "../redux/HOCs";
import ProfileForms from "../components/updatingProfile/ProfileForms"




class Profile extends React.Component {
  constructor(props) {
  super(props) 
    this.state = {
      loading:false,
      username: [],
      picture: null,
    }
    const questboardService = new QuestboardService
    const loggedInUsername = questboardService.getUsername()

  }
  

  
  render() {
    

    const {  Content, Footer} = Layout;
    const { loading, imageUrl } = this.state;
    

    return (
      <Layout className="site-layout" style={{ marginLeft: 190 }}>
      <Menu isAuthenticated={this.props.isAuthenticated} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        <div className="Profile">
      
       <h2>Update your character sheet!</h2>
      <FileUploader/>
      <hr/>
      
        </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    );
  }
}
export default userIsAuthenticated(Profile)
