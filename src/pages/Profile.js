import React from "react";
import {Image, message, Upload, Button, Layout} from 'antd';
import "antd/dist/antd.css"
import Menu from "../components/menu/MenuAuthenticated";
import { userIsAuthenticated } from "../redux/HOCs";

import Icon from "@ant-design/icons/lib/components/Icon";

class Profile extends React.Component {
  super(props) {
    this.state = {
      username: [],
      picture: "",
    }
  }

  render() {
    const { Header, Content, Footer} = Layout;
    return (
      <Layout className="site-layout" style={{ marginLeft: 190 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        <div className="Profile">
      <Menu isAuthenticated={this.props.isAuthenticated} />
       <h2>Your Profile Page</h2>
        <hr/>
      <Upload
         name="avatar" listType="picture-card" className="avatar-uploader" 
         accept=".png" >
           <Button Icon type="Upload">Upload Profile picture here!</Button>
           </Upload>
        
         <Button type="primary">Save picture</Button>
    </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    
   
    );
  }
}
export default userIsAuthenticated(Profile);
