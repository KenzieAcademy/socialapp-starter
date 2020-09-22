import React from "react";
import {Image, message, Upload, Button, Layout} from 'antd';
import "antd/dist/antd.css"
import Menu from "../components/menu/MenuAuthenticated";
import { userIsAuthenticated } from "../redux/HOCs";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';


import Icon from "@ant-design/icons/lib/components/Icon";

class Profile extends React.Component {
  constructor (props) {
  super(props)
    this.state = {
      username: [],
      picture: "",
    }
  }

  render() {
    const { loading, imageUrl } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    const { Header, Content, Footer} = Layout;
    return (
      <Layout className="site-layout" style={{ marginLeft: 190 }}>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        <div className="Profile">
      <Menu isAuthenticated={this.props.isAuthenticated} />
       <h2>Your Profile Page</h2>
        <hr/>
      <Upload
         name="avatar" 
         listType="picture-card" 
         className="avatar-uploader" 
         accept=".png" >
{imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton }
           {/* <Button Icon type="Upload">Upload Profile picture here!</Button> */}
           </Upload>
        
         <Button type="primary">Save picture</Button>
    </div>
        </div>
      </Content>
      <Footer className="footer" style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    
   
    );
  }
}
export default userIsAuthenticated(Profile);
